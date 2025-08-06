import { useState, useEffect } from "react";
import matchesData from "../data/matches.json";
import Match from "./Match";
import "./MatchHistory.css";

function MatchHistory({ team }) {
    const [matches, setMatches] = useState([]);

    function getMatchOBJ(game, isHome) {
        let matchOBJ = {
            position: isHome ? "home" : "away",
            opponent: isHome ? game.away_user : game.home_user,
            team_score: isHome ? game.home_score : game.away_score,
            opponent_score: isHome ? game.away_score : game.home_score,
            win: isHome ? (game.home_score > game.away_score ? "W" : "L") : (game.away_score > game.home_score ? "W" : "L"),
            stadium: game.stadium
        }

        return matchOBJ
    }
    
    useEffect(() => {
        const teamMatches = [];
        matchesData.games.forEach(game => {
            if (game.home_user === team.username) {
                teamMatches.push(getMatchOBJ(game, true));
            } else if (game.away_user === team.username) {
                teamMatches.push(getMatchOBJ(game, false));
            }
        });
        setMatches(teamMatches);
    }, [team.username]);

    return (
        <div className="match-history-container">
            {matches.map((match, index) => (
                <Match key={index} match={match} />
            ))}
        </div>
    )
}

export default MatchHistory;