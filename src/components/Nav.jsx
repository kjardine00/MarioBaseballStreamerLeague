import { Link } from "react-router";
import { useEffect, useRef } from "react";
import "./Nav.css";

function Nav({ isOpen, onClose }) {
  const navRef = useRef(null);

  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle nav link clicks
  const handleNavLinkClick = () => {
    onClose();
  };

  return (
    <nav ref={navRef} className={`vertical-nav ${!isOpen ? 'nav-closed' : ''}`}>
      <button className="nav-close-btn" onClick={onClose}>
        ×
      </button>
      <div className="nav-links">
        <Link to="/teams" className="nav-link" onClick={handleNavLinkClick}>
          TEAMS
        </Link>
        <Link to="/scores" className="nav-link" onClick={handleNavLinkClick}>
          SCORES
        </Link>
        <Link to="/standings" className="nav-link" onClick={handleNavLinkClick}>
          STANDINGS
        </Link>
        <Link to="/stats" className="nav-link" onClick={handleNavLinkClick}>
          STATS
        </Link>
        <Link to="/schedule" className="nav-link" onClick={handleNavLinkClick}>
          SCHEDULE
        </Link>
        <Link to="/rules" className="nav-link" onClick={handleNavLinkClick}>
          RULES
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
