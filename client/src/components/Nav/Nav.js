import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul>
      <li className="brand">
        <a href="/">
          Clicky Game
        </a>
      </li>
      
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>  
  </nav>
);

export default Nav;
