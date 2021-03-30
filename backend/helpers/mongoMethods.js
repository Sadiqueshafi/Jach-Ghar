var mongoose = require('mongoose')
var Promise = require('bluebird');
const logger =require('../logger/logger');
class MongoDBMethods {
constructor(collection, collectionName = '') {
  this.collection = collection
  this.collectionName = collectionName
  }
  post(query) {
    return new Promise((resolve, reject) => {
        try {
                        this.saveToDb(query,
                            (success) => {
                              console.log("query"+query)
                              console.log("success"+success)
                                return resolve(success)
                            },
                            (error) => {
                                return reject(error)
                            }
                        )
                    }

        catch (e) {
            logger.error(e)
            return reject(e)
        }
    })
  }
  get(query) {
    return new Promise((resolve, reject) => {
        try {
            this.collection.countDocuments({ 'status': 'Active' }, (err, count) => {
                this.collection.findOne(query, (err, result) => {
                    if (!err) {
                        const resp = { 'total': count, 'data': result }
                        return resolve(resp)
                    }
                    else {
                        logger.error(err)
                        return reject(err)
                    }
                })
            })
        }
        catch (e) {
            logger.error(e)
            return reject(e)
        }
    })
}

  async saveToDb(query, successCallBack, errorCallBack) {
    let coll = new this.collection(query)
    await coll.save(query, (err, result) => {
        if (!err) {
            successCallBack(result)
        }
        else {
            errorCallBack(err)
        }
    })
}
}
let classImp = new MongoDBMethods()
module.exports = MongoDBMethods;
