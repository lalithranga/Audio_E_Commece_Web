# 🛒 E-Commerce REST API

A robust, scalable RESTful API backend for e-commerce applications, built with **Node.js**, **Express**, and **MongoDB**. This API provides a complete foundation for building modern e-commerce platforms with secure user authentication, comprehensive product management, review systems, and user messaging capabilities.

## ✨ Features

- **🔐 Authentication & Authorization**
  - JWT-based authentication system
  - Secure password hashing with bcrypt
  - Role-based access control

- **📦 Product Management**
  - Complete CRUD operations for products
  - Product categorization
  - Image upload support
  - Inventory tracking

- **💰 Order Processing**
  - Cart management
  - Order creation and tracking
  - Payment integration support

- **📝 Review System**
  - Product reviews and ratings
  - Review moderation capabilities

- **💬 Messaging System**
  - User-to-user messaging
  - Notification support

- **🛠️ Developer Experience**
  - Comprehensive API documentation
  - Environment configuration
  - Hot-reloading for development
  - Testing infrastructure

## 🔧 Tech Stack

- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcrypt for password hashing
- **Utilities**: dotenv, cors, body-parser
- **Development**: nodemon for hot reloading
- **Testing**: Jest testing framework

## 📁 Project Structure

```
├── controllers/    # Business logic handlers
├── models/         # Mongoose database schemas
├── routers/        # API route definitions
├── middleware/     # Express middleware
├── utils/          # Helper functions
├── tests/          # Test suite
├── index.js        # Application entry point
├── .env            # Environment variables (not committed)
├── .env.example    # Example environment configuration
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas connection)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**

Create a `.env` file in the root directory based on `.env.example`:

```
PORT=3000
MONGO_URL=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

The API will be available at `http://localhost:3000`.

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/users/register` | Register new user | Public |
| POST | `/api/users/login` | Authenticate and get token | Public |
| GET | `/api/users/profile` | Get user profile | Private |
| PUT | `/api/users/profile` | Update user profile | Private |

### Product Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/products` | Get all products | Public |
| GET | `/api/products/:id` | Get product by ID | Public |
| POST | `/api/products` | Create new product | Admin |
| PUT | `/api/products/:id` | Update product | Admin |
| DELETE | `/api/products/:id` | Delete product | Admin |

### Review Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/products/:id/reviews` | Get product reviews | Public |
| POST | `/api/products/:id/reviews` | Create product review | Private |
| DELETE | `/api/reviews/:id` | Delete review | Admin/Owner |

### Message Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/messages` | Get user messages | Private |
| POST | `/api/messages` | Send a message | Private |
| GET | `/api/messages/:id` | Get message thread | Private |

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. For protected routes, include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

JWT verification middleware:

```javascript
app.use((req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (!err) {
        req.user = decoded;
      }
    });
  }
  next();
});
```


## 🔄 Scripts

Available npm/yarn scripts:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "test:watch": "jest --watchAll"
  }
}
```

