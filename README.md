🛒 E-Commerce Web Application
A RESTful API backend for an e-commerce platform built with Node.js, Express, MongoDB, and JWT authentication. It supports user registration/login, product management, reviews, messaging, and secure access via JWT.

📁 Project Structure
bash
Copy
Edit
├── controllers/         # Business logic (not shown here)
├── models/              # Mongoose models (not shown here)
├── routers/             # Route handlers
├── index.js             # App entry point
├── .env                 # Environment variables
├── package.json         # Project metadata & dependencies
└── README.md            # Project documentation
🚀 Features
🔐 JWT Authentication (Login/Register)

📦 Product Management

📝 Product Reviews

💬 User Messaging System

🌐 CORS Enabled

⚙️ Environment Config with dotenv

🔄 Live Reload with Nodemon

✅ Testing Setup with Jest

🛠️ Tech Stack
Backend: Node.js, Express

Database: MongoDB (with Mongoose)

Authentication: JWT

Dev Tools: Nodemon, Jest

Other: CORS, dotenv, bcrypt, body-parser

🔧 Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
PORT=3000
MONGO_URL=mongodb://localhost:27017/ecommerce
SECRET_KEY=your_jwt_secret
4. Start the Server
bash
Copy
Edit
npm start
5. Run Tests (Optional)
bash
Copy
Edit
npm test
# or in watch mode
npm run test:watch
🔗 API Endpoints
🔐 Auth Routes (/api/users)
POST /register – Create a new user

POST /login – Login and receive a JWT

📦 Product Routes (/api/products)
GET / – List all products

POST / – Add a new product

PUT /:id – Update a product

DELETE /:id – Delete a product

📝 Review Routes (/api/reviews)
GET / – Get all reviews

POST / – Add a review

💬 Message Routes (/api/massage)
POST / – Send a message

GET / – Retrieve messages

🔐 JWT Middleware
The app checks the Authorization header for a Bearer token. If valid, it attaches the decoded user info to req.user.

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
