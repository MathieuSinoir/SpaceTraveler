import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h1>Space Travelers</h1>
          <div className="desktopNav">
            <ul>
              <li>
                <Link to="/Catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/Exploration">Exploration</Link>
              </li>
              <li>
                <Link to="/SpaceCrew">SpaceCrew</Link>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <div id="mySidenav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
            <button
              type="button"
              id="closeBtn"
              href="#"
              className="close"
              onClick={closeNav}
            >
              &times;
            </button>
            <ul>
              <li>
                <Link to="/Catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/Exploration">Exploration</Link>
              </li>
              <li>
                <Link to="/SpaceCrew">SpaceCrew</Link>
              </li>
            </ul>
          </div>
          <div className="button-container">
            <button type="button" id="openBtn" onClick={openNav}>
              <div className="burger-icon">
                <span>-</span>
                <span>-</span>
                <span>-</span>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
