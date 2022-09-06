// Express router
import express from "express";
const router = express.Router();

// UserPayment controllers
import { addNewPayment } from "../controllers/userPaymentController.js";

router.route("/payment").post(addNewPayment);

export default router;
