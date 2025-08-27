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
import Glossary from "../components/Glossary";
import "../styles/TeamPage.css";

function TeamPage() {
  const { teamId } = useParams();
  const team = teamsData.find((team) => team.id === teamId);

  const [statType, setStatType] = useState("batting");

  return (
    <div className="team-page">
      <div className="team-page-header">
        <TeamBtn className="team-btn" team={team} />
        <TwitchBtn team={team} />
        <Scoreboard team={team} />
      </div>
      <div className="team-page-content">
        <MatchHistory team={team} />
        <div className="team-page-content-right">
          <TeamRoster teamId={teamId} />
          <div className="stat-toggle">
            <button
              onClick={() => setStatType("batting")}
              className={`stat-toggle-segment ${
                statType === "batting" ? "active" : ""
              }`}
            >
              Batting
            </button>
            <button
              onClick={() => setStatType("pitching")}
              className={`stat-toggle-segment ${
                statType === "pitching" ? "active" : ""
              }`}
            >
              Pitching
            </button>
          </div>
          {statType === "pitching" ? <PitchingStatGrid /> : <BattingStatGrid />}
          <Glossary statType={statType} />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
