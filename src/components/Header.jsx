import { Link, useLocation } from "react-router";
import "./Header.css";
import hamburgerMenu from "../assets/menu-hamburger.svg";

function Header({ isHome, toggleHome, isNavOpen, toggleNav }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`header ${isHomePage ? "header-home" : "header-other"}`}>
      <Link to="/" onClick={() => toggleHome(true)}>
        <img
          className={`header-logo ${
            isHomePage ? "header-logo-home" : "header-logo-other"
          }`}
          src={"/assets/league-logo.png"}
          alt="All-Star Superstar Baseball League and Steamer Tournament Logo"
        />
      </Link>
      <button className={`nav-toggle-btn ${isHomePage ? "nav-toggle-btn-home" : "nav-toggle-btn-other"}`} onClick={toggleNav}>
        <img src={hamburgerMenu} alt="Menu" className="hamburger-icon" />
      </button>
    </div>
  );
}

export default Header;
