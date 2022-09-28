import React, { useEffect, useState } from "react";
import Books from "./Books";
import Loading from "./Loading";

const url =
  "https://api.nytimes.com/svc/books/v3/lists/current/manga.json?api-key=5qAjdlfptxxPWz2CJNhbhvjO2i3wbFbr";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBooks(data.results.books);
      setTitle(data.results.list_name);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
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
      <div className="hero-header">
        <p>
          <b>It's {title} week</b> Discover the Best seller
        </p>
      </div>
      <div>
        <Books books={books} />
      </div>
    </div>
  );
};

export default Hero;
