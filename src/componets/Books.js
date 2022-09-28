import React from "react";
import Book from "./Book";
import Slider from "react-slick";

const Books = ({ books }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section className="hero-section">
        <div className="hero-pannel">
          <Slider {...settings}>
            {books.map((book, index) => {
              return <Book {...book} key={index} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Books;
