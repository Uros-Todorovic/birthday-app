import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserPaymentSchema = new Schema({
  userId: {
    type: Number,
  },
  amount: {
    type: Number,
    required: [true, "Please provide a valid amount."],
  },
  message: {
    type: String,
  },
});

export default mongoose.model("UserPayment", UserPaymentSchema);
