// Models
import { User, Item, UserPayment } from "../models/index.js";

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
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Controller for fetching single user by name
const singleUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.params.name }).populate(
      "wishlist"
    );
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// controller for fetching single user by id
const singleUserbyID = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).populate(
      "wishlist"
    );
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Controller for adding items to wishlist of the user.
const addItemToWishList = async (req, res, next) => {
  const { name } = req.params;
  const { itemId } = req.body;
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
  const page = parseInt(req.params.page) || 1;
  let totalUsers;
  const usersPerPage = 3;
  try {
    await User.find({
      name: { $ne: req.params.name },
      $and: [
        {
          $expr: {
            $gte: [{ $month: "$birthDate" }, new Date().getMonth() + 1],
          },
        },
        {
          $expr: {
            $gte: [{ $dayOfMonth: "$birthDate" }, new Date().getDate()],
          },
        },
      ],
    })
      .countDocuments()
      .then((numberOfUsers) => {
        totalUsers = numberOfUsers;
        return User.find({
          name: { $ne: req.params.name },
          $and: [
            {
              $expr: {
                $gte: [{ $month: "$birthDate" }, new Date().getMonth() + 1],
              },
            },
            {
              $expr: {
                $gte: [{ $dayOfMonth: "$birthDate" }, new Date().getDate()],
              },
            },
          ],
        })
          .skip((page - 1) * usersPerPage)
          .limit(usersPerPage);
      })
      .then((users) => {
        res.status(200).json({
          users: users,
          totalUsers: totalUsers,
          currentPage: page,
          nextPage: page + 1,
          prevPage: page - 1,
          hasNextPage: usersPerPage * page < totalUsers,
          hasPreviousPage: page > 1,
        });
      });
  } catch (error) {
    next(error);
  }
};

export {
  register,
  addItemToWishList,
  listOfAllUsers,
  singleUser,
  singleUserbyID,
};
