import React from "react";

const Book = ({
  book_image,
  amazon_product_url,
  title,
  author,
  description,
}) => {
  return (
    <>
      <div className="card-pannel">
        <div className="card-container">
          <div className="card-mid">
            <img src={book_image} alt="" />
          </div>
          <div className="card-bottom">
            <h1>
              <a href={amazon_product_url} target="_blank" rel="noopener">
                {title}
              </a>
            </h1>
            <h3>{author}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
