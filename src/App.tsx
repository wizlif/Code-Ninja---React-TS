import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./BlogDetails";
import Home from "./Home";
import NavBar from "./NavBar";
import NewBlog from "./NewBlog";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<NewBlog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
