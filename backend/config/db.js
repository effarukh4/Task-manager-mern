const mongoose = require("mongoose");

// Cache the connection across serverless invocations so we don't
// open a new MongoDB connection on every request (Vercel reuses
// warm function instances between calls).
let cached = global._mongooseConn;
if (!cached) {
  cached = global._mongooseConn = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_URI)
      .then((conn) => {
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error(`MongoDB connection error: ${error.message}`);
    throw error; // let the caller handle it instead of killing the process
  }

  return cached.conn;
};

module.exports = connectDB;
