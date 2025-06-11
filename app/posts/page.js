import ReactMarkdown from "react-markdown";

const markdown = `
# Heading 1

Some _italic_, **bold**, and __underline__ (with HTML: <u>underline</u>).

> A blockquote example

- Bullet 1
- Bullet 2

[Click here](https://example.com)

---

A paragraph with normal text.
`;

export default function BlogRenderer() {
  return (
    <div className="prose prose-invert max-w-2xl mx-auto px-4">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="text-3xl font-black font-raleway mb-4 text-neutral text-center"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-xl font-extrabold font-raleway mb-3 text-neutral"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base font-serif my-3 text-neutral" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-blue-500 link link-hover" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 pl-4 italic text-sm font-mono text-secondary"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-6 text-base font-serif" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          hr: () => <hr className="my-6 border-t border-neutral" />,
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-accent" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-neutral" {...props} />
          ),
          u: ({ node, ...props }) => (
            <u className="underline decoration-dashed" {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
