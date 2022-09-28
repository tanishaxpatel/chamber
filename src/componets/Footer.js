import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/chamber logo.png";
import home from "../pages/Home";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p>Discover weekly,the best new books/manga</p>
        <div>
          <ul className="footer-links">
            <li>
              <NavLink to="/home" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/discover" className="footer-link">
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="footer-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
