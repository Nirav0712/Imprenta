import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/db.js";

// Connect MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});