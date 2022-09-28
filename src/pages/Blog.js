import React from "react";

import Blogpage from "../componets/Blogpage";
import BlogHeading from "../componets/BlogHeading";
import Navbar from "../componets/Navbar";
import Modal from "../componets/Modal";
const Blog = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <BlogHeading />
      <Blogpage />
    </div>
  );
};

export default Blog;
