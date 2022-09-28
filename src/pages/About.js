import React from "react";
import Modal from "../componets/Modal";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <div className="about-container">
        <div className="about-right">
          <div>
            <h1>About Us</h1>
          </div>
          <div className="about-one">
            <p>
              The most popular book authors listed in a page. Listed by most
              relevant and popular authors first.
            </p>
          </div>
          <div className="about-two">
            We have an incredible collection of used books that include both
            fiction and non-fiction. If you are looking for a new author to read
            or something out of the ordinary we are worth the visit. We are also
            planning to expand our collection into specific subject fields in
            the future.
          </div>

          <div className="about-three">
            Chamber has created an online store and in the coming months will
            begin to upload a partial listing of our books for purchase along
            with other items that we sell. The store is operational and
            functional and there are some books now listed. We regularly post
            books for sale on our Facebook page too.
          </div>
        </div>
        <div className="about-left">
          <div className="about-four">
            There is a chance to have a cup of coffee or tea, or during the
            summer, a glass of lemonade or ice tea and a kolache, an English
            dessert roll that is common here in New York. We also have other
            snacks.
          </div>
          <div className="about-five">
            In addition, we host a series of programs called A Conversation With
            in which we host speakers with a wide range of interests and
            expertise. They take the form of lectures, readings, musical events
            and gatherings for social occasions. We also feature the work of
            regional artists in the store on a regular basis
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
