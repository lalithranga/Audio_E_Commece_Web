
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


// {"email": "wkdlkumaraa.com",
// "password": "123"
// } customer


// "email": "wkdlkumaraaa.com",
// "password": "123",

// admin








// function getProducts(connectionStatus) {
//     const promise = new Promise((resolve, reject) => {
//       if (connectionStatus) {
//         resolve([
//           {
//             id: 1,
//             name: "Product 1",
//             price: 100,
//           },
//           {
//             id: 2,
//             name: "Product 2",
//             price: 200,
//           },
//         ]);
//       } else {
//         reject({
//           message: "Connection failed",
//           status: 500,
//         });
//       }
//     });
//     return promise;
//   }


// function getProducts(connectionStatus) {
//     const promise = new Promise((resolve, reject) => {
//       if (connectionStatus) {
//         resolve([
//           {
//             id: 1,
//             name: "Product 1",
//             price: 100,
//           },
//           {
//             id: 2,
//             name: "Product 2",
//             price: 200,
//           },
//         ]);
//       } else {
//         reject({
//           message: "Connection failed",
//           status: 500,
//         });
//       }
//     });
//     return promise;
//   }
  
//   async function printProducts() {
//     try {
//       const products = await getProducts(false);
//       console.log(products);
//     } catch (e) {
//       console.log(e);
//     }
//   }
  
//   printProducts();