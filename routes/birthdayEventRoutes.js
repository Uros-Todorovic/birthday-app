// Express router
import express from "express";
const router = express.Router();

// BirthdayEvent controllers
import {
  addNewBirthdayEvent,
  addParticipantToBirthdayEvent,
} from "../controllers/birthdayEventController.js";

router.route("/newBirthdayEvent/:userCreatorId").post(addNewBirthdayEvent);
router.route("/addParticipant/:id").post(addParticipantToBirthdayEvent);

export default router;
