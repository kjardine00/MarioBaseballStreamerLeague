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
            <div className="outfield">
                <PlayerSlot player={players[0] || ""} />
                <PlayerSlot player={players[1] || ""} />
                <PlayerSlot player={players[2] || ""} />
            </div>
            <div className="infield">
                <PlayerSlot player={players[3] || ""} />
                <PlayerSlot player={players[4] || ""} />
                <PlayerSlot player={players[5] || ""} />
                <PlayerSlot player={players[6] || ""} />
            </div>
            <div className="pitcher">
                <PlayerSlot player={players[7] || ""} />
            </div>
            <div className="catcher-row">
                <div className="catcher">
                    <PlayerSlot player={players[8] || ""} />
                </div>
                <div className="bench">
                    <PlayerSlot player={players[9] || ""} />
                </div>
            </div>
        </div>
    )
}

export default TeamRoster;