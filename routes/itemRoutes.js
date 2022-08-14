// Express router
import express from "express";
const router = express.Router();

// Items controllers
import { addItem, deleteItem } from "../controllers/itemController.js";

router.route("/addItem").post(addItem);
router.route("/:id").delete(deleteItem);

export default router;
