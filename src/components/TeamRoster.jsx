import PlayerSlot from "./PlayerSlot";
import "./TeamRoster.css";
import teamsData from "../data/teams.json";

function TeamRoster({ teamId }) {
    // Find the team data directly from the imported JSON
    const team = teamsData.find(t => t.id === teamId);
    const players = team?.roster || [];

    if (!team) {
        return <div className="team-roster">Team not found</div>;
    }

    if (!players || players.length === 0) {
        return <div className="team-roster">Loading team roster...</div>;
    }

    return (
        <div className="team-roster">
            <div className="roster-grid">
                {players.map((player, index) => (
                    <PlayerSlot key={index} player={player || ""} />
                ))}
            </div>
        </div>
    )
}

export default TeamRoster;