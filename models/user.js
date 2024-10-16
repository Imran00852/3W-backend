import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  socialMediaHandle: {
    type: "String",
    required: "true",
  },
  image: [String],
});

export const User = mongoose.model("User", userSchema);
