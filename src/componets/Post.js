import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function Post({ id, img, username, bookTitle, review, rating }) {
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="post-container">
      <div className="post-center">
        <div className="post-img">
          <img src={img} alt="" />
        </div>
        <div className="post-right">
          <div className="post-title">
            <h1>{bookTitle}</h1>
          </div>
          <div className="post-uname">
            <h5>Reviewed by {username}</h5>
          </div>
          <div>
            <ReactStars value={rating} size="34" edit={false} />
          </div>
          <div className="post-review">
            <p>
              {readmore ? review : `${review.substring(0, 300)}...`}
              <button
                onClick={() => setReadmore(!readmore)}
                className="readmore"
              >
                {readmore ? "show less" : "show more"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
