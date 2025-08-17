module.exports = (io) => {
  io.on("connection", (user) => {
    console.log("User connected:", user.id);

    // Listen for messages
    user.on("chatMessage", (msg) => {
      console.log(`message from ${user.id}:`, msg);
      io.emit("chatMessage", msg); // broadcast to all clients
    });

    // Disconnect
    user.on("disconnect", () => {
      console.log("User disconnected:", user.id);
    });
  });
};
