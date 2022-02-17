import { useEffect, useState } from "react";
import { BlogType } from "../types";
import { Service, Status } from "./types";

const useBlogsService = (url: string) => {
  const abortController = new AbortController();

  const [result, setResult] = useState<Service<BlogType[]>>({
    status: Status.LOADING,
  });

  useEffect(() => {
    setTimeout(
      () =>
        fetch(url, { signal: abortController.signal })
          .then((response) => response.json())
          .then((response) =>
            setResult({ status: Status.LOADED, payload: response })
          )
          .catch((error) => {
            if (error.name === "AbortError") {
              console.log("aborted");
            } else {
              setResult({ status: Status.ERROR, error });
            }
          }),
      3000
    );

    return () => abortController.abort();
  }, [url]);

  return result;
};

export default useBlogsService;
