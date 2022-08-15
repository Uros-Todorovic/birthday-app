// Express router
import express from "express";
const router = express.Router();

// Presents controllers
import { buyPresentFromWishlist } from "../controllers/presentController.js";

router.route("/buyPresentFromWishlist/:itemId").post(buyPresentFromWishlist);

export default router;
