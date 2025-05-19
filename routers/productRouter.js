import express from 'express';
import {addProduct, getAllProducts, deleteProduct, updateProduct, getOneProduct } from '../controllers/productController.js';


const productRouter = express.Router();
productRouter.post('/',addProduct)
productRouter.get('/',getAllProducts)
productRouter.delete('/:key',deleteProduct)
productRouter.put('/:key',updateProduct)
productRouter.get('/:key',getOneProduct)

export default productRouter;