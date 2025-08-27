import teamsData from "../data/teams.json";
import { getTeamLogo, getStadiumImage } from "../assets/assetRegistry";
import "../styles/MatchHistory.css";
import { NavLink } from "react-router";

function Match({ match }) {
  // Find the opponent team data
  const opponentTeam = teamsData.find((team) => team.username === match.opponent);

  return (
    <div className="match-obj">
      <div className="match-obj-position">
        {match.position === "home" ? "VS" : "@"}
      </div>
      <NavLink to={`/teams/${opponentTeam?.id}`}>
        <img
          src={getTeamLogo(opponentTeam?.name)}
          className="match-obj-opp-logo"
          alt={`${opponentTeam?.name} logo`}
        />
      </NavLink>
      <div className="match-obj-opp-name">
        {opponentTeam?.name}
      </div>
      <div className={match.win === "W" ? "match-obj-win" : "match-obj-loss"}>
        {match.win}
      </div>
      <div className="match-obj-score">
        {match.opponent_score} - {match.team_score}
      </div>
      <img 
        src={getStadiumImage(match.stadium) ? getStadiumImage(match.stadium) : (() => { console.log('No stadium image found for:', match.stadium); return null; })()} 
        className="match-obj-stadium" 
      />
    </div>
  );
}

export default Match;
