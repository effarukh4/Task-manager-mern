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

---

# 🛠 Tech Stack

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
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/effarukh4/task-manager-api.git

cd task-manager-api
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/task-manager

JWT_SECRET

JWT_EXPIRES_IN=7d
```

> You can use either **MongoDB Community Server** or **MongoDB Atlas**.

---

## Run the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server runs on

```
http://localhost:5000
```

---

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
```

---

# 📄 Sample Request

## Register

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

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