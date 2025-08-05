import { Link } from "react-router";
import TeamBtn from "../components/TeamBtn";
import "./Teams.css";
import { useState, useEffect } from "react";
import teamsData from "../data/teams.json";
import { getStadiumImage } from "../assets/assetRegistry";


function Teams() {
  const [teams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState(null);

  const handleCurrentTeam = (team) => {
    setCurrentTeam(team);
  }

  useEffect(() => {
    setTeams(teamsData);
  }, []);

  return (
    <>
    <StadiumBackground stadium={currentTeam?.stadium} />
    <div className="teams-container">
      {teams.length > 0 ? (
        teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            <TeamBtn team={team} />
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
