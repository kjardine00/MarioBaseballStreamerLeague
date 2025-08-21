import { useParams } from "react-router";
import TeamRoster from "../components/TeamRoster";
import { getTeamLogo } from "../assets/assetRegistry";
import teamsData from "../data/teams.json";
import Scoreboard from "../components/Scoreboard";
import MatchHistory from "../components/MatchHistory";
import TeamBtn from "../components/TeamBtn";
import TwitchBtn from "../components/TwitchBtn";
import "./TeamPage.css";

function TeamPage() {
  const { teamId } = useParams();
  const team = teamsData.find((team) => team.id === teamId);

  return (
    <div className="team-page">
      <div className="team-page-header">
        <div className="team-page-header-left">
          <TeamBtn className="team-btn" team={team} />
          <TwitchBtn team={team} />
        </div>
        <div className="team-page-header-right">
          <Scoreboard team={team} />
        </div>
      </div>
      <div className="team-page-content">
        <MatchHistory team={team} />
        <div className="team-page-content-right">
          <TeamRoster teamId={teamId} />
          {/* <TeamStats team={team} /> */}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;