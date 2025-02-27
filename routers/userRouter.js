import express from 'express';
import { getAllUsers, userRegister, loginUser, selectedProduct } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/',getAllUsers);

userRouter.post('/',userRegister)

userRouter.post('/login', loginUser)

userRouter.get('/productType', selectedProduct);



export default userRouter;
