import { useParams } from "react-router";

function TeamPage() {
    const { teamId } = useParams();
    
    return (
        <div>
            <h1>Team Page for: {teamId}</h1>
            <p>This is the detailed page for the {teamId} team.</p>
        </div>
    )
}

export default TeamPage;