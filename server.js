const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

// Import Files
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
const chatSocket = require("./socket/chatSocket");

// Initialize App & Server
const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// Socket.IO
const io = new Server(server, {
  cors: {
    methods: ["GET", "POST"],
  },
});

// For Socket Handle
chatSocket(io);

// For MongoDB Connection
connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
