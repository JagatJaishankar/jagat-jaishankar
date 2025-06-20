import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ImageDynamicBlur from "@/app/components/ImageDynamicBlur";

const getPost = async (postId) => {
  const session = await auth();
  await connectMongo();
  const post = await Post.findOne({ _id: postId, userId: session?.user?.id });
  if (!post) {
    redirect("/");
  }
  return post;
};

export default async function PostPage({ params }) {
  const { postId } = await params;
  const post = await getPost(postId);
  return <div>{post.content}</div>;
}
