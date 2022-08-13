import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  urlLink: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Item", ItemSchema);
