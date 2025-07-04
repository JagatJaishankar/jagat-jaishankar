export const dynamic = "force-dynamic";

import { BoltSVG, BoxArrowSVG } from "./components/SVGIcons.js";
import LocalTime from "./functions/LocalTime.js";
import connectMongo from "@/libs/mongoose.js";
import User from "@/models/User";
import Post from "@/models/Post";
import ImageDynamicBlur from "./components/ImageDynamicBlur.js";
import Link from "next/link";

async function getUser() {
  const userId = "6852a2fc8a2238dc074d2ebb";
  await connectMongo();
  return await User.findById(userId).populate({
    path: "posts",
    options: { sort: { createdAt: -1 } },
  });
}

export default async function Home() {
  const writer = await getUser();
  const posts = writer.posts;
  const backThen = "2025-06-09T02:52:45.604Z";
  return (
    <main className="text-primary">
      {/* blog header */}
      <section className="max-w-2xl mx-auto text-center py-32 px-6">
        <div className="font-raleway text-lg opacity-80">
          zero clue about next update
        </div>
        <h1 className="font-space font-black text-5xl mb-2">
          jagoff
          <span className="text-2xl font-extrabold opacity-80">.dev</span>
        </h1>
        <div className="font-raleway mb-8">&mdash; by jagat jaishankar</div>
        <div className="btn btn-neutral font-raleway font-extrabold mb-1 text-lg">
          latest post
        </div>
        <div className="font-space mb-2 text-lg">
          ¯\_(ツ)_/¯
          <br />\ /<br />
          _||_
        </div>
      </section>

      {/* blog timeline view */}
      <section className="max-w-2xl mx-auto px-6">
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
                    <Link
                      className="btn btn-neutral font-raleway font-bold"
                      href={`/post/${post.id}`}
                    >
                      full post
                      <BoxArrowSVG />
                    </Link>
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
        </ul>
      </section>
    </main>
  );
}
