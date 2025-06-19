"use client";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import axios from "axios";
import toast from "react-hot-toast";

const FormNewPost = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    if (loading) return;
    event.preventDefault();
    setLoading(true);

    try {
      const data = await axios.post("/api/post", {
        title,
        thumbnail,
        description,
        content,
      });
      console.log(data);
      setTitle("");
      setThumbnail("");
      setDescription("");
      setContent("");
      toast.success("post published");
    } catch (error) {
      const errorMessage =
        error.response.data.error || error.message || "something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" grid md:grid-cols-2 max-md:grid-rows-2 gap-4 text-start">
      <form
        className="bg-base-200 rounded-md border-1 border-neutral p-4"
        onSubmit={handleSubmit}
      >
        <div className="font-raleway text-xl font-extrabold text-center">
          create new post
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-space font-black">
            title of post
          </legend>
          <input
            type="text"
            className="input font-lora w-full"
            placeholder="you know what's cool?"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-space font-black">
            upload post thumbnail
          </legend>
          <input
            type="file"
            className="file-input font-lora w-full lowercase"
            onChange={async (event) => {
              const file = event.target.files[0];
              if (!file) return;

              const formData = new FormData();
              formData.append("file", file);
              formData.append("upload_preset", "thumbnail_upload"); // 👈 your preset name

              try {
                const res = await fetch(
                  "https://api.cloudinary.com/v1_1/dd3e7r60v/image/upload", // 👈 replace this
                  {
                    method: "POST",
                    body: formData,
                  },
                );

                const data = await res.json();
                setThumbnail(data.secure_url); // ✅ save the uploaded URL in state
                toast.success("thumbnail uploaded!");
              } catch (err) {
                console.error("Upload error", err);
                toast.error("upload failed!");
              }
            }}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-space font-black">
            post description
          </legend>
          <textarea
            className="textarea h-12 font-lora w-full"
            placeholder="A BILLION DOLLARS... i mean nothing beats that feeling for sure :)"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-space font-black">
            post content
          </legend>
          <textarea
            className="textarea h-72 font-lora w-full"
            placeholder="write the post in markdown"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </fieldset>
        <button
          className="btn btn-neutral font-raleway font-extrabold w-full mt-4"
          type="submit"
        >
          {loading && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
          publish post
        </button>
      </form>
      <div className="bg-base-200 border-neutral border-1 rounded-md p-4">
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
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default FormNewPost;
