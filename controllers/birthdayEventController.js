// Models
import { User, BirthdayEvent, UserPayment } from "../models/index.js";

// Custom errors
import { BadRequestError } from "../errors/index.js";

// Controller for adding new birthday event
const addNewBirthdayEvent = async (req, res, next) => {
  const { id } = req.body;
  try {
    if (!id) {
      throw new BadRequestError("Please provide id for user");
    }
    const eventCreatorId = req.params.userCreatorId;
    const user = await User.findById(id);
    const birthdayPersonId = user._id.toHexString();
    const birthdayEvent = await BirthdayEvent.create({
      birthdayPerson: birthdayPersonId,
      participants: [],
      totalMoneyAmount: 0,
      eventCreator: eventCreatorId,
      notes: "",
    });
    res.status(200).send(birthdayEvent);
  } catch (error) {
    next(error);
  }
};

// Controller for updating the birthday event when participant is added

const addParticipantToBirthdayEvent = async (req, res, next) => {
  const { id } = req.body;
  try {
    if (!id) {
      throw new BadRequestError("Please provide id for user");
    }
    const participant = await UserPayment.findOne({ userId: id });
    const birthdayEvent = await BirthdayEvent.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { participants: { userPaymentId: participant._id } },
        $inc: { totalMoneyAmount: participant.amount },
      }
    );
    res.status(200).send(birthdayEvent);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Controllers for returning all the birthdays except it's own. List can be filtered by open and all birthdays

const returnAllBirthdayEventsExceptOwn = async (req, res, next) => {
  const { userId } = req.body;
  try {
    if (!userId) {
      throw new BadRequestError("Please provide id for user");
    }
    const birthdayEvents = await BirthdayEvent.find({
      birthdayPerson: { $ne: userId },
    }).populate("birthdayPerson");

    if (req.body.openEvent === "true") {
      let openEvents = [];
      for (const event of birthdayEvents) {
        new Date(event.birthdayPerson.birthDate).getDate() >
          new Date().getDate() &&
          new Date(event.birthdayPerson.birthDate).getMonth() + 1 >=
            new Date().getMonth() + 1 &&
          openEvents.push(event);
      }
      return res.status(200).send(openEvents);
    }

    res.status(200).send(birthdayEvents);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export {
  addNewBirthdayEvent,
  addParticipantToBirthdayEvent,
  returnAllBirthdayEventsExceptOwn,
};
