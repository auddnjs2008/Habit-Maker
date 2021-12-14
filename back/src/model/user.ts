import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passWord: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profileImage: String,
});

const User = mongoose.model("User", userSchema);

export default User;
