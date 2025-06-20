import { BoltSVG, BoxArrowSVG } from "../components/SVGIcons.js";
import LocalTime from "../functions/LocalTime.js";
import connectMongo from "@/libs/mongoose.js";
import User from "@/models/User";
import Post from "@/models/Post";
import ImageDynamicBlur from "../components/ImageDynamicBlur.js";
import FormNewPost from "../components/FormNewPost.js";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function getUser() {
  const userId = "6852a2fc8a2238dc074d2ebb";
  await connectMongo();
  return await User.findById(userId).populate({
    path: "posts",
    options: { sort: { createdAt: -1 } },
  });
}

export default async function AdminPage() {
  const writer = await getUser();
  const posts = writer.posts;
  const backThen = "2025-06-09T02:52:45.604Z";

  const session = await auth();
  if (!session) {
    redirect("/");
  }
  if (session.user.role === "reader") {
    redirect("/");
  }

  return (
    <main>
      {/* the hero section i guess */}
      <section className="px-6 py-12 text-center">
        <h1 className="font-raleway font-black text-5xl">i&apos;m CEO bitch</h1>
        <div className="font-space text-lg opacity-80">
          the journey matters a lot
        </div>
        <section className="max-w-5xl mx-auto py-12">
          <FormNewPost />
        </section>
        <hr className="max-w-2xl mx-auto" />
      </section>

      {/* edit and delete timeline */}
      <section className="max-w-2xl mx-auto px-6 pb-12">
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <BoltSVG />
            </div>
            <div className="timeline-end mb-6">
              <time className="font-space uppercase opacity-70">
                near future
              </time>
              <div className="font-raleway text-xl font-extrabold">
                coming soon...
              </div>
              <div className="font-lora">
                i don&apos;t know when, hopefully soon :)
              </div>
            </div>
            <hr />
          </li>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <hr />
                <div className="timeline-middle">
                  <BoltSVG />
                </div>
                <div className="timeline-end mb-6 space-y-1">
                  <time className="font-space uppercase opacity-80">
                    <LocalTime isoString={post.createdAt} />
                  </time>
                  <div className="text-xl font-extrabold font-raleway">
                    {post.title}
                  </div>
                  {post.thumbnail && (
                    <ImageDynamicBlur src={post.thumbnail} alt={post.title} />
                  )}
                  <div className="font-lora mb-2">{post.description}</div>
                  {post.content && (
                    <button className="btn btn-neutral font-raleway font-bold">
                      full post
                      <BoxArrowSVG />
                    </button>
                  )}
                </div>
                <hr />
              </li>
            );
          })}
          <li>
            <hr />
            <div className="timeline-middle">
              <BoltSVG />
            </div>
            <div className="timeline-end mb-6">
              <time className="font-space uppercase opacity-80">
                <LocalTime isoString={backThen} />
              </time>
              <div className="text-xl font-extrabold font-raleway">
                the beginning
              </div>
              <div className="font-lora">
                i wrote this while building the blog.
              </div>
            </div>
          </li>
        </ul>{" "}
      </section>
    </main>
  );
}
