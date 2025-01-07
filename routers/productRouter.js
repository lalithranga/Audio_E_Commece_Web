import express from 'express';
import {addProduct } from '../controllers/productController.js';
import { get } from 'mongoose';

const productRouter = express.Router();
productRouter.post('/',addProduct)

export default productRouter;