
# 🚀 Task Manager API

A production-ready RESTful API built with **Node.js, Express.js, and MongoDB**, designed using the **MVC architecture**. The application provides secure JWT-based authentication, user-specific task management, centralized error handling, and a scalable backend structure following modern backend development practices.

## ✨ Features

### 🔐 Authentication & Security
- User Registration & Login
- Secure password hashing with **bcryptjs**
- JWT-based Authentication & Authorization
- Protected API routes using middleware
- User-specific resource access control
- Environment variable management with **dotenv**

### 📋 Task Management
- Create, Read, Update & Delete (CRUD) Tasks
- User-specific task ownership
- Filter tasks by status
- Due date support
- Status management (Pending, In Progress, Completed)

### 🏗️ Backend Architecture
- RESTful API Design
- MVC Project Structure
- Mongoose ODM & Schema Validation
- Centralized Error Handling
- Async Error Wrapper
- Custom API Error Classes
- Modular & Scalable Codebase
=======
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-MIT-green)

# 🚀 Ledger — MERN Task Manager

A full-stack **MERN Task Manager** application built with **MongoDB, Express.js, React, and Node.js**. The application enables users to securely manage daily tasks with JWT authentication, protected routes, and complete CRUD functionality following modern full-stack development practices.

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- Secure Password Hashing (bcryptjs)
- JWT Authentication & Authorization
- Protected Routes
- Persistent User Sessions

### 📋 Task Management
- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- Task Status Management
- Filter Tasks by Status
- User-specific Task Ownership

### 🎨 Frontend
- Responsive Dashboard
- Modern React UI
- Context API Authentication
- Axios API Integration
- Loading & Error States
- Mobile-Friendly Design

### ⚙️ Backend
- RESTful API
- MVC Architecture
- MongoDB & Mongoose
- Centralized Error Handling
- Secure Environment Configuration
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95

---

# 🛠 Tech Stack

<<<<<<< HEAD
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | Object Data Modeling |
| JWT | Authentication |
| bcryptjs | Password Encryption |
| dotenv | Environment Configuration |
| Nodemon | Development Server |

---

# 📁 Project Structure

```text
task-manager-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── utils/
│   ├── ApiError.js
│   └── asyncHandler.js
│
├── .env.example
├── .gitignore
├── package.json
└── server.js
=======
## Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Context API
- CSS3

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- Nodemon

---

# 📂 Project Structure

```text
task-manager-mern/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95
```

---

<<<<<<< HEAD
# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/effarukh4/task-manager-api.git

cd task-manager-api
=======
# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/effarukh4/task-manager-mern.git

cd task-manager-mern
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95
```

---

<<<<<<< HEAD
## Install Dependencies
=======
# ⚙️ Backend Setup

Navigate to the backend folder

```bash
cd backend
```

Install dependencies
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95

```bash
npm install
```

<<<<<<< HEAD
---

## Configure Environment Variables

Create a `.env` file in the project root.
=======
Create a `.env` file
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/task-manager

<<<<<<< HEAD
JWT_SECRET
=======
JWT_SECRET=super_secure_secret_key
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95

JWT_EXPIRES_IN=7d
```

<<<<<<< HEAD
> You can use either **MongoDB Community Server** or **MongoDB Atlas**.

---

## Run the Application

Development
=======
Start the backend server
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95

```bash
npm run dev
```

<<<<<<< HEAD
Production

```bash
npm start
```

Server runs on
=======
Backend runs at
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95

```
http://localhost:5000
```

---

<<<<<<< HEAD
# 📌 API Endpoints

## Authentication

| Method | Endpoint | Access |
|---------|----------|--------|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |
| GET | `/api/auth/me` | Private |

---

## Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Get All Tasks |
| GET | `/api/tasks/:id` | Get Single Task |
| POST | `/api/tasks` | Create Task |
| PUT | `/api/tasks/:id` | Update Task |
| DELETE | `/api/tasks/:id` | Delete Task |
| GET | `/api/tasks?status=Pending` | Filter Tasks |

---

# 🔑 Authentication

Protected routes require a valid JWT token.

```
Authorization: Bearer <your_jwt_token>
=======
# 💻 Frontend Setup

Open a new terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95
```

---

<<<<<<< HEAD
# 📄 Sample Request

## Register

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
=======
# 🔐 Authentication Flow

```
User
   │
   ▼
Register / Login
   │
   ▼
JWT Token Generated
   │
   ▼
Stored in Local Storage
   │
   ▼
Sent with API Requests
   │
   ▼
Protected Backend Routes
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95
```

---

<<<<<<< HEAD
## Create Task

```json
{
  "title": "Complete Backend Project",
  "description": "Implement authentication and CRUD operations",
  "status": "In Progress",
  "dueDate": "2026-08-15"
}
```

---

# 🧪 Testing

The API has been tested using:

- Postman
- MongoDB Compass
- MongoDB Shell
- Local Express Server

Verified functionality includes:

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Complete CRUD Operations
- Error Handling
- MongoDB Integration

---

# 🚀 Deployment

Frontend and backend can be deployed separately.

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas



# 🔒 Security Features

- Password Hashing (bcryptjs)
- JWT Authentication
- Protected Middleware
- User Resource Authorization
- Environment Variables
- Centralized Error Handling



# 📈 Future Improvements

- Task Search
- Task Pagination
- Priority Levels
- File Attachments
- Email Verification
- Password Reset
- Swagger API Documentation
- Docker Support
- Unit & Integration Testing
- GitHub Actions CI/CD
=======
# 📌 API Overview

### Authentication

- Register User
- Login User
- Get Current User

### Tasks

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task
- Filter Tasks by Status

---

# 🌍 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---



# 📈 Future Enhancements

- Task Search
- Pagination
- Priority Levels
- Due Date Reminders
- Calendar View
- Drag & Drop Tasks
- Dark Mode
- Profile Management
- Email Verification
- Password Reset
- Docker Support
- GitHub Actions CI/CD
- Unit & Integration Testing

---

# 📚 Documentation

Each module contains its own detailed documentation.

| Folder | Description |
|--------|-------------|
| `/backend` | Complete API documentation, environment setup, deployment guide, and project architecture |
| `/frontend` | Frontend architecture, environment configuration, deployment guide, and UI structure |

---
>>>>>>> 3a4e9dfa1ccb6f0907162e79689150b943b5de95
