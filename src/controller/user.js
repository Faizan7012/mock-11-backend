const User = require("../model/user")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const createUser = async(req, res)=>{
   const {email, password , name } = req.body;
    try{
      let find = User.find({email})  
      if(find.length > 0){
        res.send({
            status:false,
            message:'Email is already exists !'
        })
      }
      else{
      bcrypt.hash(password, 4, async function(err, hash) {
            if (err) {
                res.send({
                    status:false ,
                    message:'Something is wrong with password !'
                })
            } else {
              try{
                let user = await User.create({name,email, password :hash});
                res.send({
                    status:true,
                    message:'Your Account is created successfully',
                    user
                })
              }
              catch(e){
                res.send({status:false , message: 'Email already exists !'})
              }
            }
      })
    }
    }
    catch(e){
        res.send({
            status:false ,
            message:e.message
        })
    }
}




const loginUser = async(req, res)=>{
    const {email, password} = req.body;
     try{
       let find = User.find({email , password})  
       if(find.length <= 0){
         res.send({
             status:false,
             message:'Email or password is incorrect!'
         })
       }
       else{
        bcrypt.compare(password, find[0].password, function (err, result) {
            if (result) {
              const token = jwt.sign(
                { userID: isPresent[0]._id },
                  "top_secret_key",
                { expiresIn: "7d" }
              );
              res.send({ status : true , message: "Login Successfully ! ", token: token });
            } else if (err) {
              res.send({ status:false ,  message: 'Your password is incorrect' });
            }
      })
     }
    }
     catch(e){
         res.send({
             status:false ,
             message:e.message
         })
     }
 }



module.exports = {createUser , loginUser}