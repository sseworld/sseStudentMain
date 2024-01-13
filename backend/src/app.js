const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");
const db = require("./config/mongoConfig");
const students = require("./routes/studentRouter");
const notFoundMiddleWare = require("./middlewares/notFound");
const errorHandlerMiddleWare = require("./middlewares/globalErrorHandler");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/app/api/students", students);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

const port = Number(process.env.PORT);

const startServer = async () => {
  try {
    await mongoose.connect(db.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

startServer().then(() => {});
