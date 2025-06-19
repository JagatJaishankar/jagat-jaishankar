import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // unique identifier created by MongoDB :)

  name: {
    type: String,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  role: {
    type: String,
    trim: true,
    lowercase: true,
    default: "reader",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", userSchema);
