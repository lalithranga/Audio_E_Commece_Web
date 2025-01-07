
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import productRouter from './routers/productRouter.js';

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use( (req, res, next) => {
let token = req.headers.authorization

if(token != null){
    token = token.replace('Bearer ','')

    jwt.verify(token, 'Dhanushika90', (err, decoded) => {
        if(!err){

            req.user= decoded;
          
        }
    });


    
}
   
next()
})

let mongodbUrl= process.env.MONGO_URL
mongoose.connect(mongodbUrl);
let connection= mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.listen(3000
    , () => {
    console.log('Server is running on port 3000');
});
