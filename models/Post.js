import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  // unique identifier created by MongoDB :)

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  thumbnail: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  content: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
