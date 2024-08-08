import React from "react";
import "../styles.css";

function Header() {
  return (
    <div className="header">
      <img className="img" src="logo.png" alt="web-main-logo" />
      <h2 className="app-subtitle">
        It's time for popcorn ! Find your next movie here.
      </h2>
    </div>
  );
}

export default Header;
