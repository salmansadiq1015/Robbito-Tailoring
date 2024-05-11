import mongoose from "mongoose";

const serviceModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shotDesc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("services", serviceModel);
