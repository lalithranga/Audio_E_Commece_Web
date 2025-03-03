import express from 'express';
import {addProduct, getAllProducts, deleteProduct, updateProduct, getProduct } from '../controllers/productController.js';


const productRouter = express.Router();
productRouter.post('/',addProduct)
productRouter.get('/',getAllProducts)
productRouter.delete('/:key',deleteProduct)
productRouter.put('/:key',updateProduct)

productRouter.get('/:key',getProduct)

export default productRouter;