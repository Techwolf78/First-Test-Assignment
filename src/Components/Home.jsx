// Home.js
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showPages, setShowPages] = useState(false);
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const handleAllPagesClick = () => {
    setShowPages(!showPages);
  };

  return (
    <div className="home-container">
      <div className="checkbox-container">
        <div className="checkbox" onClick={handleAllPagesClick}>
          <input type="checkbox" id="all-pages" />
          <label htmlFor="all-pages">All pages</label>
        </div>
        {showPages &&
          pages.map((page, index) => (
            <div className="checkbox" key={index}>
              <input type="checkbox" id={page} />
              <label htmlFor={page}>{page}</label>
            </div>
          ))}
      </div>
      <button className="done-button">Done</button>
    </div>
  );
};

export default Home;
