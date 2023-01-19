const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoURI = "mongodb+srv://vanshita:waheguru@cluster0.v2epw4n.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports= connectToMongo;

