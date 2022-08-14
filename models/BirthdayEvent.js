import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BirthdayEventSchema = new Schema({
  birthdayPerson: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  participants: {
    type: [
      {
        userPaymentId: {
          type: Schema.Types.ObjectId,
          ref: "UserPayment",
        },
      },
    ],
  },
  eventCreator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  totalMoneyAmount: {
    type: Number,
  },
  notes: {
    type: String,
  },
});

export default mongoose.model("BirthdayEvent", BirthdayEventSchema);
