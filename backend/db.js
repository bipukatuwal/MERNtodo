const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/todo_app`, {});
    console.log("Database connected successfulliy !!");
  } catch (err) {
    console.log("Failed to connect database");
  }
};

connectDB();
