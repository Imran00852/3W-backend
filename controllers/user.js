import { User } from "../models/user.js";

//sign up
export const signupController = async (req, res) => {
  const { name, socialMediaHandle } = req.body;
  const imageUrl = req.files.map((img) => img.path);
  try {
    await User.create({
      name,
      socialMediaHandle,
      image: imageUrl,
    });

    res.status(201).json({
      success: true,
      message: "Registered Successfully!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//get all users
export const getAllUsers = async (req, res) => {
  let users = await User.find({});
  if (!users) {
    return res.status(404).json({
      message: "No user found",
    });
  }

  res.status(200).json({
    users,
  });
};
