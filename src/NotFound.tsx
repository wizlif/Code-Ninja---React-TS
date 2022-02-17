import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: "100vh" }}
    >
      <span className="text-4xl">404 Not Found</span>
      <NavLink
        to="/"
        className="mt-6 rounded-md p-5 text-white font-bold bg-pink-500"
      >
        Go Home
      </NavLink>
    </div>
  );
}

export default NotFound;
