import teamsData from "../data/teams.json";
import { getTeamIcon, getStadiumImage } from "../assets/assetRegistry";

function Match({ match }) {

  return (
    <div className="match-obj">
      <div className="match-obj-position">
        {match.position === "home" ? "VS" : "@"}
      </div>
      <img
        src={getTeamIcon(
          teamsData.find((team) => team.username === match.opponent)?.name
        )} className="match-obj-opp-logo"
      />
      <div className="match-obj-opp-name">
        {teamsData.find((team) => team.username === match.opponent).name}
      </div>
      <div className="match-obj-win">{match.win}</div>
      <div className="match-obj-score">
        {match.opponent_score} - {match.team_score}
      </div>
      <img src={getStadiumImage(match.stadium)} className="match-obj-stadium" />
    </div>
  );
}

export default Match;
