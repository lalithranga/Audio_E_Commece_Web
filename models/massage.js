import mongoose from "mongoose";

const massage = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
      },
      name : {
        type : String,
        required : true
      },
      massage : {
        type : String,
        required : true
      },
      date : {
        type : Date,
        required : true,
        default : Date.now()
      },
}
)