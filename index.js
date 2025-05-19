
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import productRouter from './routers/productRouter.js';
import reviewRouter from './routers/reviewRouter.js';
import massageRouter from './routers/massageRouter.js';
import cors from 'cors'

const app = express();

app.use(cors());

dotenv.config();

app.use(bodyParser.json());

app.use( (req, res, next) => {
let token = req.headers.authorization

if(token != null){
    token = token.replace('Bearer ','')

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
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
app.use('/api/reviews', reviewRouter);
app.use('/api/massage', massageRouter);


app.listen(3000
    , () => {
    console.log('Server is running on port 3000');
});

