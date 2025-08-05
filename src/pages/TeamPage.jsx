import { useParams } from "react-router";
import TeamRoster from "../components/TeamRoster";

function TeamPage() {
    const { teamId } = useParams();
    
    return (
        <div className="team-page">
            <h1>Team Page for: {teamId}</h1>
            <TeamRoster teamId={teamId} />
        </div>
    )
}

export default TeamPage;