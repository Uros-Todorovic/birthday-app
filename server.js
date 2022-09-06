import express from "express";
const app = express();

// npm package dependency for .env variables
import dotenv from "dotenv";
dotenv.config();

// Database connection
import connectDB from "./db/connect.js";

// Routers
import {
  userRouter,
  itemRouter,
  birthdayEventRouter,
  presentRouter,
  userPaymentRouter,
} from "./routes/index.js";

// Middlewares

import { notFoundMiddleware, errorHandler } from "./middleware/index.js";

// Middleware that only parses JSON and only looks at the requests where the content-type header matches the type option
app.use(express.json());

// Dummy testing route
app.get("/api/v1", (req, res) => {
  //throw new Error('error');
  res.json({ message: "Wellcome from API" });
});

// Mounting routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/item", itemRouter);
app.use("/api/v1/birthdayEvent", birthdayEventRouter);
app.use("/api/v1/present", presentRouter);
app.use("/api/v1/userPayment", userPaymentRouter);

// If non of routes match, use not-found middleware for any http method
app.use(notFoundMiddleware);

// Error handler for all existing routes
app.use(errorHandler);

// Spin up server if the connection to database is successful.
// Async / await implementation - mongoose connection returns a promise
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
