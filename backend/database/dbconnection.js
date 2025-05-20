import mongoose from "mongoose";

export const dbConnection = () => {
  console.log("MONGO_URL from env:", process.env.MONGO_URL); // Debug log

  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("✅ Connected to database!");
    })
    .catch((err) => {
      console.error("❌ Error connecting to database:", err);
    });
};
