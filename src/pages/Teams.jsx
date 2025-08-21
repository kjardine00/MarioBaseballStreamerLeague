import { Link } from "react-router";
import TeamBtn from "../components/TeamBtn";
import "./Teams.css";
import { useState, useEffect, useCallback, useRef } from "react";
import teamsData from "../data/teams.json";
import StadiumBackground from "../components/StadiumBackground";
import { getStadiumImage } from "../assets/assetRegistry";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [bgStadium, setBGStadium] = useState("Mario Stadium");
  const prevStadiumRef = useRef("Mario Stadium");

  
  useEffect(() => {
    const preloadStadiumImages = async () => {
      setIsLoading(true);
      const stadiumNames = ["Mario Stadium", "Peach Garden", "Wario Palace", "Yoshi Park", "Donkey Kong Jungle", "Bowser Castle"];
      const imagePromises = stadiumNames.map(stadiumName => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(stadiumName);
          img.onerror = () => resolve(stadiumName); // Still resolve even if image fails to load
          img.src = getStadiumImage(stadiumName);
        });
      });

      const loadedStadiums = await Promise.all(imagePromises);
      setPreloadedImages(new Set(loadedStadiums));
      setIsLoading(false);
    };

    preloadStadiumImages();
  }, []);

  // Optimized mouse enter handler with ref comparison
  const onMouseEnter = useCallback((team) => {
    // Only update if the stadium is different to avoid unnecessary re-renders
    if (team.stadium !== prevStadiumRef.current) {
      prevStadiumRef.current = team.stadium;
      setBGStadium(team.stadium);
    }
  }, []);

  useEffect(() => {
    setTeams(teamsData);
  }, []);

  return (
    <>
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
      {/* <StadiumBackground stadium={bgStadium} /> */}
    </>
  );
}

export default Teams;
