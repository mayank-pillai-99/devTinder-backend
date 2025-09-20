const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECTION_SECRET||"mongodb+srv://mayank:FJJm0LnxI9dXXOUa@backend.lifpaoi.mongodb.net/devTinder");
};

module.exports = connectDB;
