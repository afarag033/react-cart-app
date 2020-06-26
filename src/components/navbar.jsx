import React, { Component } from "react";

// Stateless Functional Component
const NavBar = (props) => {
  return (
    // As a heading
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Total Items
        <span className="badge badge-pill badge-secondary">
          {props.totalItems}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
