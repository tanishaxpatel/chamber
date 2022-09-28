import React from "react";
import Article from "./Article";
function Articles({ articles }) {
  return (
    <div>
      <div className="wrapper">
        {articles.map((article, index) => {
          return <Article {...article} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Articles;
