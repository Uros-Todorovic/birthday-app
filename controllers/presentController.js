import BirthdayEvent from "../models/BirthdayEvent.js";
import Item from "../models/Item.js";
import Present from "../models/Present.js";
import User from "../models/User.js";
/**
 *
 * Async functions because of communication with database
 *
 **/

// User can buy a present by selecting an item from wishlist
const buyPresentFromWishlist = async (req, res, next) => {
  try {
    const birthdayEvent = await BirthdayEvent.findById(
      req.body.birthdayEventId
    ).populate("birthdayPerson");
    if (
      birthdayEvent.birthdayPerson.wishlist.filter(
        (item) => item.toString() === req.params.itemId
      ).length > 0
    ) {
      const present = await Present.create({
        birthdayEventId: req.body.birthdayEventId,
        presentBought: req.params.itemId,
      });
      return res.status(200).send(present);
    } else {
      return res.status(200).send("item not in wishlist");
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export { buyPresentFromWishlist };
