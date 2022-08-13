import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PresentSchema = new Schema({
  birthdayEventId: {
    type: {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
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
  amount: {
    type: Number,
  },
  message: {
    type: String,
  },
});

export default mongoose.model("Present", PresentSchema);
