import { response } from "express";
import BirthdayEvent from "../models/BirthdayEvent.js";
import User from "../models/User.js";
import UserPayment from "../models/UserPayment.js";

/**
 *
 * Async functions because of communication with database
 *
 **/

// Controller for adding new birthday event
const addNewBirthdayEvent = async (req, res, next) => {
  try {
    const eventCreatorId = req.params.userCreatorId;
    const user = await User.findById(req.body.id);
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
  try {
    const participant = await UserPayment.findOne({ userId: req.body.id });
    const birthdayEvent = await BirthdayEvent.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { participants: { userPaymentId: participant._id } },
        $inc: { totalMoneyAmount: participant.amount },
      }
    );
    res.status(200).send(birthdayEvent);
  } catch (error) {
    next(error);
  }
};

export { addNewBirthdayEvent, addParticipantToBirthdayEvent };
