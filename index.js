
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=> {
    const token= req.header("Authorization");
    console.log(token);
    next();


})
   

let mongodbUrl= "mongodb+srv://admin:1234@cluster0.k9s9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongodbUrl);
let connection= mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/api/users', userRouter);

app.listen(3000
    , () => {
    console.log('Server is running on port 3000');
});
