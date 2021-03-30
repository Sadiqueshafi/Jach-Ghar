
var jachGharAllData = require('../models/jachghar.model')
var mongoMethods = require('./mongoMethods')
var usersSchema = require('../models/user.model');

class jachgharalldata extends mongoMethods {
  constructor() {
      super(jachGharAllData, 'jachghar')
      // console.log("jachgharalldata"+jachGharAllData)
  }
}
class Users extends mongoMethods {
  constructor() {
      super(usersSchema, 'User')
  }
}
let jach = new jachgharalldata();
let UsersInstance = new Users();

module.exports.jach = jach;
module.exports.UsersInstance = UsersInstance;
