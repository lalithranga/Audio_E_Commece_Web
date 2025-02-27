import mongoose from "mongoose";

const massage = new mongoose.Schema({

  id:{
    type : Number,
    required : true,
    unique : true
  },
    email : {
        type : String,
        required : true,
        unique : true
      },
      name : {
        type : String,
        required : true
      },
      message : {
        type : String,
        required : true
      },
      contact_number : {
        type : Number,
        required : true
      },
      date : {
        type : Date,        
        default : Date.now()
      },
      isApproved : {
        type : Boolean,        
        default : false
      }
}

)
const Massage = mongoose.model("Massages", massage);

export default Massage