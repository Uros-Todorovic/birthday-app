// Express router
import express from "express";
const router = express.Router();

// BirthdayEvent controllers
import {
  addNewBirthdayEvent,
  addParticipantToBirthdayEvent,
  returnAllBirthdayEventsExceptOwn,
} from "../controllers/birthdayEventController.js";

router.route("/newBirthdayEvent").post(addNewBirthdayEvent);
router.route("/addParticipant").post(addParticipantToBirthdayEvent);
router.route("/all").post(returnAllBirthdayEventsExceptOwn);

export default router;
