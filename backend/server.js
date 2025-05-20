// Load environment variables FIRST
import { config } from "dotenv";
config({ path: "./config/config.env" }); // ✅ correct path

import app from "./app.js";
import cloudinary from "cloudinary";

// Debug log
console.log("Loaded MONGO_URL (server.js):", process.env.MONGO_URL);

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
