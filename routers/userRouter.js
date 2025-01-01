import express from 'express';
import { getAllUsers, userRegister, loginUser } from '../controllers/userController.js';
import { get } from 'mongoose';

const userRouter = express.Router();

userRouter.get('/',getAllUsers);

userRouter.post('/',userRegister)

userRouter.post('/login', loginUser)

export default userRouter;