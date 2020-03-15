import React from "react";
import { Link } from 'react-router-dom';

import "../css/bootstrap-4.3.1-dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/font.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Privacy Policy Analyzer</a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              About
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
