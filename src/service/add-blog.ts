import { useState } from "react";
import { NewBlogPayload } from "../NewBlog";
import { Service, Status } from "./types";

const useAddBlog = () => {
  const [service, setService] = useState<Service<boolean>>({
    status: Status.INIT,
  });

  const createNewBlog = (blog: NewBlogPayload) => {
    setService({ status: Status.LOADING });

    return new Promise((resolve, reject) =>
      fetch("http://localhost:7098/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then((response) => response.json())
        .then((result) => {
          setService({ status: Status.LOADED, payload: true });
          resolve(result);
        })
        .catch((error) => {
          if (error.name == "AbortError") {
            console.log("aborted");
          } else {
            setService({ status: Status.ERROR, error });
          }
          reject(error);
        })
    );
  };

  return { service, createNewBlog };
};

export default useAddBlog;
