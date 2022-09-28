import React, { useRef } from "react";
import Modal from "../componets/Modal";
import Navbar from "../componets/Navbar";
import emailjs from "@emailjs/browser";
import bg from "../images/pexels-snapwire-618613.jpg";
import Footer from "../componets/Footer";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_87tilgm",
        refForm.current,
        "90vDlXv5Dsi8P_c7y"
      )
      .then(
        () => {
          alert("Message successfully sent!!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message,please try again");
        }
      );
  };
  return (
    <div>
      <Navbar />
      <Modal />
      <div style={{ backgroundColor: "#707070", paddingBottom: "50px" }}>
        <img src={bg} alt="" id="c-bg" />
        <div className="contact-center">
          <div className="c-header">
            <h1>Contact</h1>
          </div>
          <div className="c-phase">
            <p>
              Do you have any special request,please contact us for more.we have
              available every workday form 08:00 to 17:00
            </p>
          </div>
          <form ref={refForm} onSubmit={sendEmail} className="c-form">
            <div className="c-name">
              <input type="text" placeholder="subject" name="subject" />
            </div>
            <div className="c-name">
              <input type="text" placeholder="NAME" name="name" />
            </div>
            <div className="c-name">
              <input type="email" placeholder="EMAIL" name="email" />
            </div>
            <div className="c-name">
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="MESSAGE"
                name="message"
              ></textarea>
            </div>
            <div className="c-submit">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
