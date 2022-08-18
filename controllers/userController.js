// Models
import { User, Item } from "../models/index.js";

// Custom errors
import { BadRequestError } from "../errors/index.js";

// Controller for register user.
const register = async (req, res, next) => {
  const { name, birthDate } = req.body;
  try {
    if (!name || !birthDate) {
      throw new BadRequestError("Please provide all values");
    }
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

// Controller for adding items to wishlist of the user.
const addItemToWishList = async (req, res, next) => {
  const { name, itemId } = req.body;
  try {
    if (!name || !itemId) {
      throw new BadRequestError("Please provide all values");
    }
    const user = await User.findOne({ name: name });
    const item = await Item.findById(itemId);
    user.wishlist.push(item);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Controller for fetching list of all users to see upcoming birthdays. This list will contain all the users whose birth date is set in the future.
const listOfAllUsers = async (req, res, next) => {
  const page = req.body.page || 1;
  const itemsPerPage = 1;
  try {
    const users = await User.find({
      _id: { $ne: req.params.id },
      $and: [
        {
          $expr: {
            $gte: [{ $month: "$birthDate" }, new Date().getMonth() + 1],
          },
        },
        {
          $expr: {
            $gt: [{ $dayOfMonth: "$birthDate" }, new Date().getDate()],
          },
        },
      ],
    })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

export { register, addItemToWishList, listOfAllUsers };
