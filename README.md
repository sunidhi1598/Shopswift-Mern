#  ShopSwift – MERN E-commerce Application

ShopSwift is a full-stack e-commerce web application built using the MERN stack.  
It supports user authentication, cart management, and secure payment integration using Razorpay.

---

##  Features

- User Registration & Login (JWT Authentication)
- Product Listing & Product Details
- Add to Cart / Remove from Cart
- Cart Total Calculation
- Protected Checkout
- Razorpay Payment Integration (Test Mode)
- Auto redirect after Login, Register & Payment
- Secure handling of environment variables

---

##  Tech Stack

**Frontend**
- React
- React Router
- Context API
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

**Payment**
- Razorpay (Test Mode)

---

##  Environment Variables

Create a `.env` file in the backend folder:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=5000


## Setup Instructions

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start