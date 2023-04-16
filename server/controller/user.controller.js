import User from "../model/user.model.js";

export const signupUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(req.body);
    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ message: "signup sucessfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while signup for the user" });
  }
};
