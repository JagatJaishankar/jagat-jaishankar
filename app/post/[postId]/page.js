import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import Link from "next/link";
import { BackArrowSVG } from "@/app/components/SVGIcons";
import ImageDynamicBlur from "@/app/components/ImageDynamicBlur";
import ReactMarkdown from "react-markdown";

const getPost = async (postId) => {
  await connectMongo();
  return await Post.findById(postId);
};

export default async function PostPage({ params }) {
  const { postId } = await params;
  const post = await getPost(postId);
  return (
    <main>
      <section className="bg-base-200 px-6 py-2">
        <div className="flex flex-row justify-between items-center">
          <Link href={"/"} className="btn btn-neutral font-raleway font-bold">
            <BackArrowSVG />
            back
          </Link>
          <div className="font-space font-xl font-black">jagoff.dev</div>
        </div>
      </section>
      <section className="max-w-2xl mx-auto text-center px-6 py-12">
        <div className="font-space opacity-50 font-black">the post</div>
        <div className="font-raleweay font-black text-3xl mb-4">
          {post.title}
        </div>
        <div className="font-lora opacity-80 mb-2">{post.description}</div>
        <div className="flex justify-center mb-6">
          <ImageDynamicBlur src={post.thumbnail} alt={post.title} />
        </div>
        <div className="font-space opacity-50 font-black mb-2">the content</div>
        <div className="bg-base-200 border-1 rounded-md p-4 text-start max-w-lg mx-auto">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-3xl font-black font-raleway mb-2 text-neutral text-center"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-2xl font-extrabold font-raleway text-neutral text-center opacity-80"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-xl font-bold font-raleway mb-2 text-neutral"
                  {...props}
                />
              ),
              h4: ({ node, ...props }) => (
                <h4
                  className="text-xl font-bold font-raleway mb-2 text-neutral"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="font-lora my-2 text-neutral" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-blue-700 link link-hover" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 pl-4 font-space border-secondary"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc ml-10 font-lora opacity-80 my-2"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => <li className="" {...props} />,
              hr: () => (
                <hr className="my-6 border-t border-neutral opacity-80" />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-primary" {...props} />
              ),
              em: ({ node, ...props }) => (
                <em className="italic text-neutral" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </section>
    </main>
  );
}
