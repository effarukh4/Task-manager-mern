require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const cors = require("cors");
app.use(cors({
  origin: "https://taskmanager-one-puce.vercel.app",
  credentials: true
}));

// Body parser
app.use(express.json());

// Make sure we're connected to MongoDB before handling any request.
// (connectDB() caches the connection, so this is a no-op after the
// first call on a warm serverless instance.)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

// Simple request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Health check
app.get("/", (req, res) => {
  res.json({ success: true, message: "Task Manager API is running" });
});
// TEMPORARY DEBUG ROUTE - remove after diagnosing
app.get("/debug-env", (req, res) => {
  res.json({
    hasMongoUri: !!process.env.MONGO_URI,
    mongoUriLength: process.env.MONGO_URI ? process.env.MONGO_URI.length : 0,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// 404 + error handling (must be last)
app.use(notFound);
app.use(errorHandler);

// Only start a local server when run directly (e.g. `node server.js`
// or `npm run dev`). On Vercel, the app is imported and handled as a
// serverless function instead, so app.listen() never runs there.
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

