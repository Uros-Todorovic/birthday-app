import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PresentSchema = new Schema({
  birthdayEventId: {
    type: Schema.Types.ObjectId,
    ref: "BirthdayEvent",
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
  presentBought: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
});

export default mongoose.model("Present", PresentSchema);
