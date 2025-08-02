import { Link, useLocation } from "react-router";
import "./Header.css";

function Header({ isHome, toggleHome }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`header ${isHomePage ? 'header-home' : 'header-other'}`}>
      <Link to="/" onClick={() => toggleHome(true)}>
        <img
          className={`header-logo ${isHomePage ? 'header-logo-home' : 'header-logo-other'}`}
          src={"/src/assets/league-logo.png"}
          alt="All-Star Superstar Baseball League and Steamer Tournament Logo"
        />
      </Link>
    </div>
  );
}

export default Header;
