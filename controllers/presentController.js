// Models
import { BirthdayEvent, Present } from "../models/index.js";

// Custom errors
import { BadRequestError, NotFoundError } from "../errors/index.js";

// User can buy a present by selecting an item from wishlist
const buyPresentFromWishlist = async (req, res, next) => {
  const { birthdayEventId } = req.body;
  try {
    if (!birthdayEventId) {
      throw new BadRequestError("Please provide birthday event id");
    }
    const birthdayEvent = await BirthdayEvent.findById(
      birthdayEventId
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
      throw new NotFoundError("Item is not in wishlist");
    }
  } catch (error) {
    next(error);
  }
};

export { buyPresentFromWishlist };
