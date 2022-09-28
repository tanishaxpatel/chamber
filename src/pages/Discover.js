import React from "react";
import Footer from "../componets/Footer";
import Modal from "../componets/Modal";
import Navbar from "../componets/Navbar";
import Posts from "../componets/Posts";

const Discover = () => {
  return (
    <div>
      <Navbar />
      <Modal />

      <Posts />
      <Footer />
    </div>
  );
};

export default Discover;
