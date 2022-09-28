import React from "react";

function Article({ title, description, urlToImage, url, publishedAt }) {
  return (
    <article className="article-container">
      <div className="article-center">
        <div className="article-header">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>

        <div className="article-img">
          <img src={urlToImage} alt="" />
        </div>
        <div className="article-dis">
          <p>{description}</p>
        </div>
        <div className="underline"></div>
      </div>
    </article>
  );
}

export default Article;
