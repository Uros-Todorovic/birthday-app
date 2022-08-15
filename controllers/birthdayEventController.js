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

// Controllers for returning all the birthdays except it's own. List can be filtered by open and all birthdays

const returnAllBirthdayEventsExceptOwn = async (req, res, next) => {
  try {
    const birthdayEvents = await BirthdayEvent.find({
      birthdayPerson: { $ne: "62f537ae97a1bff699d8360b" },
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
