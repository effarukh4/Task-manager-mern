
# 🚀 Ledger — Task Manager (Frontend)

A modern and responsive **React + Vite** frontend for the **Ledger Task Manager** application. It provides a clean user experience for managing daily tasks with secure JWT authentication, protected routes, real-time task management, and seamless integration with the Node.js/Express backend.

---

# ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT Authentication
- Persistent Sessions using Local Storage
- Protected Routes
- Automatic Logout Support

### 📋 Task Management
- Create New Tasks
- View All Tasks
- Update Existing Tasks
- Delete Tasks
- Filter Tasks by Status
- Live Task Statistics
- Optimistic UI Updates

### 🎨 User Experience
- Fully Responsive Design
- Loading Indicators
- Error Handling
- Empty State Screens
- Clean Dashboard Interface
- Mobile Friendly Layout

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend Library |
| Vite | Build Tool |
| React Router DOM | Client-side Routing |
| Axios | API Communication |
| Context API | Authentication State Management |
| CSS3 | Styling |

---

# 📁 Project Structure

```text
src/
│
├── api/
│   ├── axios.js
│   ├── auth.js
│   └── tasks.js
│
├── components/
│   ├── Button
│   ├── Loader
│   ├── Modal
│   ├── Navbar
│   ├── ProtectedRoute
│   ├── TaskCard
│   ├── TaskForm
│   └── TaskList
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── Home
│   ├── Login
│   ├── Register
│   ├── Dashboard
│   ├── CreateTask
│   ├── EditTask
│   └── NotFound
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/effarukh4/task-manager-mern-frontend.git

cd task-manager-frontend
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
VITE_API_URL=http://localhost:5000/api
```

If using a deployed backend:

```env
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## Run Development Server

```bash
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

# 📱 Pages

- 🏠 Home
- 🔑 Login
- 📝 Register
- 📊 Dashboard
- ➕ Create Task
- ✏️ Edit Task
- 🚫 404 Not Found

---

# 🔐 Authentication Flow

```
User Login/Register
        │
        ▼
Receive JWT Token
        │
        ▼
Store Token in Local Storage
        │
        ▼
Attach Token to Axios Requests
        │
        ▼
Access Protected Routes
```

---

# 📋 Core Functionalities

- User Authentication
- Secure Route Protection
- Task CRUD Operations
- Dashboard Overview
- Status Filtering
- Live Task Count
- Error & Loading States
- Responsive Navigation

---

# 🌐 Backend Integration

This frontend communicates with the **Ledger Task Manager API**.

Expected API Endpoints

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |
| GET | `/api/auth/me` |
| GET | `/api/tasks` |
| POST | `/api/tasks` |
| GET | `/api/tasks/:id` |
| PUT | `/api/tasks/:id` |
| DELETE | `/api/tasks/:id` |

---

# 📦 Production Build

Build the application

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Output directory

```
dist/
```

---

# 🚀 Deployment

## Frontend

Deploy easily on:

- Vercel
- Netlify

### Build Command

```bash
npm run build
```

### Output Directory

```
dist
```

### Environment Variable

```env
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## Backend

Recommended deployment:

- Render
- Railway

Database:

- MongoDB Atlas

---

# 🔒 Security

- JWT Authentication
- Protected Client Routes
- Secure API Requests
- Environment Variable Configuration
- Persistent User Sessions

---

# 📈 Future Improvements

- Dark Mode
- Search Tasks
- Pagination
- Priority Levels
- Calendar View
- Notifications
- Drag & Drop Tasks
- Profile Management
- Theme Customization
- PWA Support

```

