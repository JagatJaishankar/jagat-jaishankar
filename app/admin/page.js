import { BoltSVG, BoxArrowSVG } from "../components/SVGIcons.js";

import Image from "next/image";

export default function AdminPage() {
  const backThen = "2025-06-09T02:52:45.604Z";
  const localTimeBackThen = new Date(backThen).toLocaleString("en-US", {
    month: "long", // "June"
    day: "numeric", // "9"
    year: "numeric", // "2025"
    hour: "numeric", // "7"
    minute: "2-digit", // "53"
    hour12: false, // "PM"
  });
  const now = new Date().toLocaleString("en-US", {
    month: "long", // "June"
    day: "numeric", // "8"
    year: "numeric", // "2025"
    hour: "numeric", // "8"
    minute: "2-digit",
    hour12: false, // "PM"
  });
  return (
    <main>
      {/* the hero section i guess */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h1 className="font-raleway font-black text-5xl">i'm CEO bitch</h1>
        <div className="font-space text-lg opacity-80 mb-8">
          the journey matters a lot
        </div>
        <button className="btn btn-neutral font-raleway font-extrabold text-lg mb-6">
          new post
        </button>
        <hr className="max-w-xl mx-auto" />
      </section>

      {/* edit and delete timeline */}
      <section className="max-w-2xl mx-auto px-6 pb-12">
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <BoltSVG />
            </div>
            <div className="timeline-end mb-6">
              <time className="font-space uppercase opacity-80">{now}</time>
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
              time: "2025-06-11T13:48:45.604Z",
              title: "this night, things change",
              content:
                'i am calling this the night, becuase it is the night i am going to get this blog up and running. and i am going to be "wired in" (inspired by the social network)',
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
                    {new Date(post.time).toLocaleString("en-US", {
                      month: "long", // "June"
                      day: "numeric", // "9"
                      year: "numeric", // "2025"
                      hour: "numeric", // "7"
                      minute: "2-digit", // "53"
                      hour12: false, // "PM"
                    })}
                  </time>
                  <div className="text-xl font-extrabold font-raleway">
                    this night, things change
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
                    edit post
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
