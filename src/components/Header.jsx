import React from "react";
import Nav from "./Nav";
import Util from "./Util";
import { headerData } from "../util/header";
import "./styles/Header.scss";
import Mnav from "./Mnav";
const Header = ({ mNavOpen, onNavOpen, onNavClose }) => {
  const headerLogo = headerData.logo;
  return (
    <header>
      <div className="inner">
        <button
          className={`mob-nav-btn${mNavOpen ? " active" : ""}`}
          onClick={onNavOpen}
          aria-label="메뉴열기"
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <Nav />
        <h1 className="tit">
          <a href={headerLogo.href}>
            <img src={headerLogo.src} alt={headerLogo.alt} />
          </a>
        </h1>
        <Util />
      </div>
      {mNavOpen && <Mnav onNavClose={onNavClose} />}
    </header>
  );
};

export default Header;
