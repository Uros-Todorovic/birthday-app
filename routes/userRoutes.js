// Express router
import express from 'express';
const router = express.Router();

// User controllers
import { register, addItemToWishList, listOfAllUsers } from "../controllers/userController.js"

router.route('/register').post(register);
router.route('/addItemToWishList').post(addItemToWishList);
router.route('/listOfAllUsers').get(listOfAllUsers);

export default router;