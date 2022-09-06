// Models
import { UserPayment } from "../models/index.js";

// Custom errors
import { BadRequestError } from "../errors/index.js";
import { response } from "express";

// Controller for adding new user payment

const addNewPayment = async (req, res, next) => {
  const { userId, amount, message } = req.body;

  try {
    const userPayment = await UserPayment.create({
      userId,
      amount,
      message,
    });
    res.status(200).json(userPayment);
  } catch (error) {
    next(error);
  }
};

export { addNewPayment };
