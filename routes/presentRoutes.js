// Express router
import express from "express";
const router = express.Router();

// Presents controllers
import { buyPresentFromWishlist } from "../controllers/presentController.js";

router.route("/buyPresentFromWishlist").post(buyPresentFromWishlist);
