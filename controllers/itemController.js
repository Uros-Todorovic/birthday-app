// Models
import { Item } from "../models/index.js";

// Custom errors
import { BadRequestError } from "../errors/index.js";

// Controller for adding Item that will be used in the user wishlist or as a present item
const addItem = async (req, res, next) => {
  const { name, urlLink } = req.body;
  try {
    if (!name || !urlLink) {
      throw new BadRequestError("Please provide all values");
    }
    const item = await Item.create(req.body);
    res.status(200).send(item);
  } catch (error) {
    next(error);
  }
};

// Controller for deleting Item that will be used in the user wishlist or as a present item
const deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndRemove(req.params.id);
    res.status(200).send("Item deleted:" + item);
  } catch (error) {
    next(error);
  }
};

export { addItem, deleteItem };
