import express from 'express';
import { AddOrder } from '../controllers/orderControl.js';

const orderRouter = express.Router();
orderRouter.post("/", AddOrder);

export default orderRouter;

