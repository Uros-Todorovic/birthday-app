// Express router
import express from "express";
const router = express.Router();

// User controllers
import {
  register,
  addItemToWishList,
  listOfAllUsers,
  singleUser,
  singleUserbyID,
} from "../controllers/userController.js";

router.route("/:name").get(singleUser);
router.route("/byId/:id").get(singleUserbyID);
router.route("/register").post(register);
router.route("/addItemToWishList/:name").post(addItemToWishList);
router.route("/listOfAllUsers/:name?/:page?").get(listOfAllUsers);

export default router;
