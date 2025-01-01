import mongoose from "mongoose";

const product = new mongoose.Schema({    
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
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
const Product = mongoose.model("Product", product);

export default mongoose.model("Product", product);