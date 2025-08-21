import { useState, useEffect } from "react";
import matchesData from "../data/matches.json";
import "./Scoreboard.css";

function Scoreboard({ team }) {
    const [record, setRecord] = useState([0, 0]);

    // console.log("team: ", team);

    useEffect(() => {
        let wins = 0;
        let losses = 0;

        matchesData.games.forEach(game => {
            //This team is home
            // console.log("game: ", game.home_user, game.away_user, team.username);
            if (game.home_user === team.username) {
                // console.log("home game: ", game.home_score, game.away_score);
                //This team won
                if (game.home_score > game.away_score) {
                    wins++;
                //This team lost
                } else {
                    losses++;
                }
            }
            //This team is away
            if (game.away_user === team.username) {
                //This Team won
                if (game.away_score > game.home_score) {
                    wins++;
                //This team lost
                } else {
                    losses++;
                }
            }
        });

        setRecord([wins, losses]);
    }, [team.username]);

    return (
        <span className="scoreboard">
            <h1 className="scoreboard-wins">{record[0]}</h1>
            <h1 className="scoreboard-hyphen">-</h1>
            <h1 className="scoreboard-losses">{record[1]}</h1>
        </span>
    )
}

export default Scoreboard;