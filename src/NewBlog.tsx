import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./NewBlog.css";
import useAddBlog from "./service/add-blog";
import { Status } from "./service/types";

export type NewBlogPayload = {
  title: string;
  body: string;
  author: string;
};

function NewBlog() {
  const { service, createNewBlog } = useAddBlog();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const blog: NewBlogPayload = {
      title,
      body,
      author,
    };

    if (service.status !== Status.LOADING) createNewBlog(blog);
  };

  return (
    <div className="mx-5">
      <h2 className="my-3 text-lg">New Blog</h2>
      <form onSubmit={submitForm}>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            placeholder="Enter title"
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="body">Body</label>
          <textarea
            rows={10}
            placeholder="Enter body"
            id="body"
            required
            onChange={(e) => setBody(e.target.value)}
          />

          <label htmlFor="author">Author</label>
          <input
            placeholder="Enter author"
            id="author"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />

          <div className="flex flex-row">
            <span className="flex-grow"></span>
            <button className="p-4 bg-pink-500 text-white rounded-md flex flex-row items-center">
              {service.status === Status.LOADING && (
                <svg
                  width="200px"
                  height="200px"
                  viewBox="0 0 100 100"
                  className="animate-spin h-6 w-6 mr-3"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="32"
                    stroke-width="8"
                    stroke="#ffffff"
                    stroke-dasharray="50.26548245743669 50.26548245743669"
                    fill="none"
                    stroke-linecap="round"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                  />
                </svg>
              )}
              Save Blog
            </button>
            {service.status === Status.LOADED && <Navigate to="/" />}
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewBlog;
