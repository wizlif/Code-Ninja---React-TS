import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import useBlogService from "./service/blog";
import { Status } from "./service/types";

function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const { blog } = useBlogService(Number(id));

  return (
    <div className="blog-details">
      <h1>Blog Details</h1>
      {blog.status === Status.LOADED && (
        <div className="shadow-md p-5">
          <p className="text-xl">{blog.payload.title}</p>
          <p className="my-2">{blog.payload.body}</p>
          <p className="text-sm text-pink-700">
            Written By: {blog.payload.author}
          </p>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
