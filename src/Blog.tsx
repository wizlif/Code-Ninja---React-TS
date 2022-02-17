import React from "react";
import { NavLink } from "react-router-dom";
import "./Blog.css";

type BlogProps = {
  title: string;
  body: string;
  author: string;
  id: number;
  onDelete: (id: number) => void;
};

const Blog = ({ title, body, author, onDelete, id }: BlogProps) => {
  return (
    <NavLink to={`/blogs/${id}`}>
      <div className="blog-item">
        <h1>{title}</h1>
        {/* <h2>{body}</h2> */}
        <p>Written By: {author}</p>
        {/* <button onClick={() => onDelete(id)}>Delete Blog</button> */}
      </div>
    </NavLink>
  );
};

export default Blog;
