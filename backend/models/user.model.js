var mongoose =require("mongoose");
// const { stringify } = require("querystring");

const bcrypt =require('bcrypt')
var userSchema =new mongoose.Schema({
  fullName:{
   type:String,
   required:'fullName not be empty'
  },
  email:{
    type:String,
    required:'Email not be empty',
    unique:true
  },
  password:{
    type:String,
    required:'password not be empty',
    minlength:[4,'atleast 4 charactor is require']
  },
  saltSecret:String
});
userSchema.path('email').validate((val) =>{
  emailRegx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegx.test(val);
},'envalid email-id')


userSchema.pre('save',function(next){
// bcrypt.genSalt
  bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(this.password,salt,(err,hash)=>{
    this.password = hash;
    this.saltSecret =salt;
    next()
  })})
})

module.exports = mongoose.model('User',userSchema);
