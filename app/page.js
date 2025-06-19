import { BoltSVG, BoxArrowSVG } from "./components/SVGIcons.js";
import Image from "next/image";
import LocalTime from "./functions/LocalTime.js";
import connectMongo from "@/libs/mongoose.js";
import User from "@/models/User";

async function getUser() {
  await connectMongo();
  return await User.findById("6852970da0e0bd358c2a864d").populate({
    path: "posts",
    options: { sort: { createdAt: -1 } },
  });
}

export default async function Home() {
  const writer = await getUser();
  const posts = writer.posts;
  console.log(writer.posts);
  const backThen = "2025-06-09T02:52:45.604Z";
  const now = Date.now();
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
              <time className="font-space uppercase opacity-80">
                <LocalTime isoString={now} />
              </time>
              <div className="font-raleway text-xl font-extrabold">
                coming soon...
              </div>
              <div className="font-lora">
                i don&apos;t know when, but hopefully some time soon :)
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
                    <Image
                      src={post.thumbnail}
                      width={281}
                      height={281}
                      alt={post.image}
                      quality={80}
                      className="rounded-sm max-w-full h-auto"
                    />
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
        </ul>
      </section>
    </main>
  );
}
