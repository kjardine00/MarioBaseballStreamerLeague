import { Link } from "react-router";
import "./Nav.css";
import teamsTabImage from "../assets/tabs/teams.png";
import scheduleTabImage from "../assets/tabs/schedule.png";
import standingsTabImage from "../assets/tabs/standings.png";
import playoffsTabImage from "../assets/tabs/playoffs.png";
// import statsTabImage from "../assets/tabs/stats.png";

function Nav() {
  return (
    <nav className="vertical-nav">
      <div className="nav-links">
        <Link to="/teams" className="nav-link">
          <img src={teamsTabImage} alt="Teams" />
        </Link>
        <Link to="/teams" className="nav-link">
          <img src={scheduleTabImage} alt="Teams" />
        </Link>
        <Link to="/teams" className="nav-link">
          <img src={standingsTabImage} alt="Teams" />
        </Link>
        <Link to="/teams" className="nav-link">
          <img src={playoffsTabImage} alt="Teams" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
