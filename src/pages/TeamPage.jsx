import { useParams } from "react-router";
import { useState } from "react";
import TeamRoster from "../components/TeamRoster";
import teamsData from "../data/teams.json";
import Scoreboard from "../components/Scoreboard";
import MatchHistory from "../components/MatchHistory";
import TeamBtn from "../components/TeamBtn";
import TwitchBtn from "../components/TwitchBtn";
import PitchingStatGrid from "../components/PitchingStatGrid";
import BattingStatGrid from "../components/BattingStatGrid";
import "./TeamPage.css";

function TeamPage() {
  const { teamId } = useParams();
  const team = teamsData.find((team) => team.id === teamId);

  const [statType, setStatType] = useState("batting");

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
          <button onClick={() => {
            console.log("clicked");
          }}>
            Batting
          </button>
          <button onClick={() => {
            console.log("clicked");
          }}>
            Pitching
          </button>
          <PitchingStatGrid />
          <BattingStatGrid />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;