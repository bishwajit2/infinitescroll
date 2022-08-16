import React, { useState, useRef, useCallback } from "react";
import "../App.css";
import Loading from "./Loading";
import useBookSearch from "../lib/useBookSearch";

const FetchContent = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search Books..."
            />
          </div>
          <div className="books">
            {books.map((book, index) => {
              if (books.length === index + 1) {
                return (
                  <div ref={lastBookElementRef} key={book}>
                    {book}
                  </div>
                );
              } else {
                return <div key={book}>{book}</div>;
              }
            })}
          </div>
          <div className="loading">{loading && <Loading />} </div>
          <div className="error">{error && "Error"}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FetchContent;
