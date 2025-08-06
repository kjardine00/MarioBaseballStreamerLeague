import { useParams } from "react-router";
import TeamRoster from "../components/TeamRoster";
import { getTeamLogo } from "../assets/assetRegistry";
import teamsData from "../data/teams.json";

function TeamPage() {
  const { teamId } = useParams();
  const team = teamsData.find((team) => team.id === teamId);

  return (
    <div className="team-page">
      <img
        src={getTeamLogo(team.name)}
        alt={`${team.name} Logo`}
        className="team-btn-img"
      />
      {/* <Score />
      <Matches /> */}
      <TeamRoster teamId={teamId} />
    </div>
  );
}

export default TeamPage;
