import { BoltSVG, BoxArrowSVG } from "./components/SVGIcons.js";
import Image from "next/image";

export default function Home() {
  const backThen = "2025-06-09T02:52:45.604Z";
  const localTimeBackThen = new Date(backThen).toLocaleString();
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
        <h3 className="text-3xl font-raleway font-extrabold text-center text-secondary">
          my recent posts
        </h3>
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <BoltSVG />
            </div>
            <div className="timeline-end mb-6">
              <time className="font-space uppercase opacity-80">now</time>
              <div className="font-raleway text-xl font-extrabold">
                coming soon...
              </div>
              <div className="font-lora">
                i don&apos;t know when, but hopefully some time soon :)
              </div>
            </div>
            <hr />
          </li>
          {[
            {
              time: "9/6/2025, 7:53:44 PM",
              title: "damn, this day",
              content:
                "it was a day and a half, one to remeber rofl. i am just going to add more text here to make it look like a real post. i am just going to add more text here to make it look like a real post. i am just going to add more text here to make it look like a real post.",
              image: "/the-social-network.jpg",
            },
          ].map((post, index) => {
            return (
              <li key={index}>
                <hr />
                <div className="timeline-middle">
                  <BoltSVG />
                </div>
                <div className="timeline-end mb-6 space-y-1">
                  <time className="font-space uppercase opacity-80">
                    {post.time}
                  </time>
                  <div className="text-xl font-extrabold font-raleway">
                    {post.title}
                  </div>
                  <Image
                    src={post.image}
                    width={281}
                    height={281}
                    alt={post.image}
                    quality={80}
                    className="rounded-sm max-w-full h-auto"
                  />
                  <div className="font-lora mb-2">{post.content}</div>
                  <button className="btn btn-neutral font-raleway font-bold">
                    full post
                    <BoxArrowSVG />
                  </button>
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
                {localTimeBackThen}
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
