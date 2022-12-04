const mongoose = require("mongoose");

const NotesSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true,
        unique:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:date,
        default:Date.now 
    }
  });

  module.expots = mongoose.model("user",NotesSchema)
