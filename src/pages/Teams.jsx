import { Link } from "react-router";
import TeamBtn from "../components/TeamBtn";
import "./Teams.css";
import { useState, useEffect } from "react";
import teamsData from "../data/teams.json";
import StadiumBackground from "../components/StadiumBackground";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [bgStadium, setBGStadium] = useState("Mario Stadium");

  const onMouseEnter = (team) => {
    setBGStadium(team.stadium);
  }

  useEffect(() => {
    setTeams(teamsData);
  }, []);

  return (
    <>
    <StadiumBackground stadium={bgStadium} />
    <div className="teams-container">
      {teams.length > 0 ? (
        teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            <TeamBtn team={team} onMouseEnter={onMouseEnter} />
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
    </>
  );
}

export default Teams;
