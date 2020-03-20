import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap-4.3.1-dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/font.css";
export default function Navbar({ css }) {
  return (
    <div className={css}>
      <nav className="navbar navbar-expand-lg navbar-white bg-purple ">
        <a className="navbar-brand">Privacy Policy Analyzer</a>
  

        


          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/site">
              Site
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
     
        
      </nav>
    </div>
  );
}
