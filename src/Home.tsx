import React from "react";
import Blog from "./Blog";
import useBlogsService from "./service/blogs";
import { Status } from "./service/types";

function Home() {
  const service = useBlogsService("http://localhost:7098/blogs");

  const onDelete = (id: number) => {
    // setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="m-2">
      {service.status === Status.LOADING && <div>Loading ...</div>}
      {service.status === Status.LOADED &&
        service.payload.map((blog) => (
          <Blog onDelete={onDelete} key={blog.id} {...blog} />
        ))}
      {service.status === Status.ERROR && (
        <div className="bg-red-500 text-white p-5">
          Error, the backend moved to the dark side
        </div>
      )}
    </div>
  );
}

export default Home;
