import mongoose from "mongoose";

const Hotel = new mongoose.Schema({
  title: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  price: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Hotel", Hotel);
