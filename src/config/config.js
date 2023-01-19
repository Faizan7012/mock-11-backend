const mongoose = require('mongoose');

const connect = async()=>{
   return mongoose.connect('mongodb+srv://medshoppe:medshoppe@cluster0.lfujmad.mongodb.net/mock-11?retryWrites=true&w=majority');
}

module.exports = {connect}