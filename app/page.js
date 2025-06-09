import { BoltSVG } from "./components/SVGIcons.js";

export default function Home() {
  const backThen = "2025-06-09T02:52:45.604Z";
  const localTimeBackThen = new Date(backThen).toLocaleString();
  return (
    <main className="text-primary">
      {/* blog header */}
      <section className="max-w-2xl mx-auto text-center py-32 px-6">
        <div className="font-raleway text-sm opacity-80">
          zero clue about next update
        </div>
        <h1 className="font-space font-black text-4xl mb-2">
          jagoff
          <span className="text-2xl font-extrabold opacity-80">.dev</span>
        </h1>
        <div className="font-raleway text-sm mb-8">
          &mdash; by jagat jaishankar
        </div>
        <div className="btn btn-neutral font-raleway font-extrabold mb-1">
          latest post
        </div>
        <div className="font-space mb-2">
          ¯\_(ツ)_/¯
          <br />\ /<br />
          _||_
        </div>
      </section>

      {/* blog timeline view */}
      <section className="max-w-2xl mx-auto px-6">
        <h3 className="text-2xl font-raleway font-extrabold text-center text-secondary">
          recent posts
        </h3>
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <BoltSVG />
            </div>
            <div className="timeline-end mb-6">
              <time className="font-space text-sm uppercase opacity-80">
                now
              </time>
              <div className="font-raleway text-lg font-extrabold">
                coming soon...
              </div>
              <div className="font-lora">
                i don&apos;t know when, but hopefully some time soon :)
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BoltSVG />
            </div>
            <div className="timeline-end mb-6">
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black">iMac</div>
              iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of Apple&apos;s
              consumer desktop offerings since its debut in August 1998, and has
              evolved through seven distinct forms
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BoltSVG />
            </div>
            <div className="timeline-end mb-6">
              <time className="font-space text-sm uppercase opacity-80">
                {localTimeBackThen}{" "}
              </time>
              <div className="text-lg font-extrabold font-raleway">
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
