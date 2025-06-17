import ReactMarkdown from "react-markdown";

const markdown = `
# this is a blog heading
## subtitle goes here
---

### introduction
and then starts the blog... like today I don't have much to talk about, but I will try to write something interesting.

the reason showing up is so important is that it builds consistency and discipline. even when you don't feel like it, showing up can lead to unexpected inspiration and creativity.

---

### i will also add a quote:
oh and also a quote to save this memory:
> an empty mind is a **devil's workshop**

---

### just testing bullets:
oh and say there was something that i found, and i wanted to share it with ya'll in the form of bullet points... it would kind of look something like this:
- i would say something here
- and then more here
- followed by another point

---

### testing italics
you know what i thought of calling this blog initially?

"*i'm CEO bitch.*"

---

### lastly... testing images :)

okay i am going to use something like that i do in obsidian and i really hope it works.. and shows and image below... I mean not like I will be doing all of this often, but ye i truly do hope it all works and shows the way i want it to :)

![the image](/the-social-network.jpg)

damn everything actually works and i just super surpised... like who would have expected this to work out of the box! literally NOBODYYY!

---

`;

export default function BlogRenderer() {
  return (
    <div className="prose prose-invert max-w-2xl mx-auto px-6 py-12">
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
          hr: () => <hr className="my-6 border-t border-neutral opacity-80" />,
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-primary" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-neutral" {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
