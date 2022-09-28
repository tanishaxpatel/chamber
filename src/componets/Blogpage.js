import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Articles from "./Articles";

const url =
  "https://newsapi.org/v2/everything?q=book&from=2022-05-16&sortBy=publishedAt&apiKey=c99ffd0e4d464011976308af793bc7bc";

const Blogpage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const fetchArticle = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.articles);
      setLoading(false);
      setArticles(data.articles);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Articles articles={articles} />
    </div>
  );
};

export default Blogpage;
