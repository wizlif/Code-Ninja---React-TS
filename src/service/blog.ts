import { useEffect, useState } from "react";
import { BlogType } from "../types";
import { Service, Status } from "./types";

const useBlogService = (id: number) => {
  const abortController = new AbortController();
  const [blog, setBlog] = useState<Service<BlogType>>({
    status: Status.LOADING,
  });

  useEffect(() => {
    fetch(`http://localhost:7098/blogs/${id}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((result) =>
        setBlog({
          status: Status.LOADED,
          payload: result,
        })
      )
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("aborted");
        } else {
          setBlog({
            status: Status.ERROR,
            error: error,
          });
        }
      });

    return () => abortController.abort();
  }, [id]);

  return { blog };
};

export default useBlogService;
