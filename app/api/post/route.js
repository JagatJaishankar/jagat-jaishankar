import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Post from "@/models/Post";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.title) {
      return NextResponse.json(
        { error: "post title is required" },
        { status: 400 },
      );
    }

    if (!body.description) {
      return NextResponse.json(
        { error: "post description is required" },
        { status: 400 },
      );
    }

    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { error: "you must be logged in to create a post" },
        { status: 401 },
      );
    }

    await connectMongo();
    const user = await User.findById(session.user.id);
    const post = await Post.create({
      userId: user._id,
      title: body.title,
      thumbnail: body.thumbnail,
      description: body.description,
      content: body.content,
    });

    user.posts.push(post._id);
    await user.save();
    return NextResponse.json(
      { message: "post created successfully" },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json(
      { error: e.message || "something went wrong" },
      { status: 500 },
    );
  }
}
