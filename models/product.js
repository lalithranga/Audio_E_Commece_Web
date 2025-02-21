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
       
    }
    
});
const Product = mongoose.model("productList", product);

export default Product;