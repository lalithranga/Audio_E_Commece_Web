# 🛒 E-Commerce Web Application

A RESTful API backend for an e-commerce platform built with **Node.js**, **Express**, and **MongoDB**. It supports user authentication, product management, reviews, messaging, and secure API access using JWT.

---

## 📁 Project Structure

├── controllers/ # Business logic
├── models/ # Mongoose schemas
├── routers/ # Route definitions
├── index.js # App entry point
├── .env # Environment configuration
├── package.json # Project dependencies
└── README.md # Project documentation


---

## 🚀 Features

- 🔐 JWT Authentication (Login/Register)
- 📦 Product CRUD operations
- 📝 Product reviews
- 💬 User messaging system
- 🌐 CORS support
- ⚙️ Environment variable management
- 🔄 Nodemon for development
- ✅ Jest for testing

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT
- **Utilities**: bcrypt, dotenv, cors, body-parser
- **Dev Tools**: nodemon, jest

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend

2. Install Dependencies

npm install

3. Configure Environment
Create a .env file in the root directory:

PORT=3000
MONGO_URL=mongodb://localhost:27017/ecommerce
SECRET_KEY=your_jwt_secret

4. Start the Server

npm start

📦 API Routes
Users – /api/users
POST /register – Register a new user

POST /login – Login and get JWT token

Products – /api/products
GET / – List all products

POST / – Create new product

PUT /:id – Update product by ID

DELETE /:id – Delete product by ID

Reviews – /api/reviews
GET / – Get all reviews

POST / – Add a new review

Messages – /api/massage
GET / – Get messages

POST / – Send a message

🔐 Middleware: JWT Verification
All protected routes verify the JWT from the Authorization header. If valid, the user is attached to req.user.

js
Copy
Edit
app.use((req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (!err) {
        req.user = decoded;
      }
    });
  }
  next();
});
🧪 Sample package.json
json
Copy
Edit
{
  "name": "express",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "jest",
    "start": "nodemon index.js",
    "test:watch": "jest --watchAll"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "body-parser": "^1.20.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.2",
    "nodemon": "^3.1.9"
  },
  "devDependencies": {
    "jest": "^29.7.0"
  }
}


🧠 Notes
This project assumes MongoDB is running locally. Update MONGO_URL in .env if hosted elsewhere.

All data access and business logic are separated into controller files.

Passwords are hashed with bcrypt before storage.

Error handling and input validation should be added for production use.

