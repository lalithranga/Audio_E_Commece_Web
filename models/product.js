import mongoose from "mongoose";


const product = new mongoose.Schema({    
   key : {
    type: String,
    required: true,
    unique: true
   },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
       
    },
    catagory: {
        type: String,
       
        default: "uncategorised"
    },
    dimentions: {
        type: String,
       
    },
    image : {
        type : String,
        
        default : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_1280.png"
    },
    availablity : {
        type : Boolean,
        default : true
    }
    
});
const Product = mongoose.model("productList", product);

export default Product;