import React from "react";
import Hero from "../componets/Hero";

import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import Modal from "../componets/Modal";

const home = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <Footer />
      <Modal />
    </div>
  );
};

export default home;
