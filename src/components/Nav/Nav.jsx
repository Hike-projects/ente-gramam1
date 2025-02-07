import React from "react";
import "./Nav.css"; // This matches the Nav.css location inside "components"

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <h1 className="navbar-title">Ente Gramam</h1>
      </div>
    </nav>
  );
};

export default Nav;
