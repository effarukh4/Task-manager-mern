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

---

# 🛠 Tech Stack

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
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/effarukh4/task-manager-mern.git

cd task-manager-mern
```

---

# ⚙️ Backend Setup

Navigate to the backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/task-manager

JWT_SECRET=super_secure_secret_key

JWT_EXPIRES_IN=7d
```

Start the backend server

```bash
npm run dev
```

Backend runs at

```
http://localhost:5000
```

---

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
```

---

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
```

---

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
