import Item from "../models/Item.js";
import User from "../models/User.js";

/**
 *
 * Async functions because of communication with database
 *
 **/

// Controller for register user.
const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

// Controller for adding items to wishlist of the user.
const addItemToWishList = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    const item = await Item.findById(req.body.itemId);
    user.wishlist.push(item);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Controller for fetching list of all users to see upcoming birthdays.
const listOfAllUsers = async (req, res, next) => {
  let todaysDate = new Date().toLocaleDateString().split("/");
  const todaysDay = Number(todaysDate[1]);
  const todaysMonth = Number(todaysDate[0]);
  try {
    const users = await User.find();
    let usersWithFutureBirthday = [];
    for (const user of users) {
      let dayOfBirthday = Number(
        user.birthDate.toLocaleDateString().split("/")[1]
      );
      let monthOfBirthday = Number(
        user.birthDate.toLocaleDateString().split("/")[0]
      );
      if (dayOfBirthday > todaysDay && monthOfBirthday >= todaysMonth) {
        usersWithFutureBirthday.push(user);
      }
    }
    res.status(200).send(usersWithFutureBirthday);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export { register, addItemToWishList, listOfAllUsers };
