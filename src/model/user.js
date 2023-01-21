const {model , Schema} = require('mongoose');

const userS = new Schema({
    name :{type:String , required :true},
    email: { type: String, required: true , unique:true},
    password :{type:String , required :true },

},{
    versionKey:false , timestamps:true
})

const User = model('user', userS);

module.exports = User;