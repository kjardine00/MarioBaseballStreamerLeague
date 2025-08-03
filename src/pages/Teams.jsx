import { useParams } from "react-router";
import { Link } from "react-router";
import TeamBtn from "../components/TeamBtn";
import "./Teams.css";
import { useState, useEffect } from "react";

function Teams() {
const [teams, setTeams] = useState([]);

let data = [
    {
        id: "cjya-monkeys",
        name: "CJYA Monkeys",
        logo: "/src/assets/cjya-monkeys-logo.png"
    },
    {
        id: "dgr-dingers",
        name: "DGR Dingers",
        logo: "/src/assets/dgr-dingers-logo.png"
    },
    {
        id: "fir-golf-rules",
        name: "FIR Golf Rules",
        logo: "/src/assets/fir-golf-rules_logo-01_2040px.png"
    },
    {
        id: "gooners",
        name: "Gooners",
        logo: "/src/assets/gooners-logo.png"
    },
    {
        id: "lightorious-swingers",
        name: "Lightorious Swingers",
        logo: "/src/assets/Lightorious-swingers-logo.png"
    },
    {
        id: "moarf-lobsters",
        name: "Moarf Lobsters",
        logo: "/src/assets/moarf-lobsters-logo.png"
    },
    {
        id: "phillie-cheesesteaks",
        name: "Phillie Cheesesteaks",
        logo: "/src/assets/phillie-cheesesteaks-logo.png"
    },
    {
        id: "virgins",
        name: "Virgins",
        logo: "/src/assets/virgins-logo.png"
    },
    {
        id: "vswed-bombers",
        name: "VSWED Bombers",
        logo: "/src/assets/vswed-bombers-logo.png"
    },
    {
        id: "wet-blankets",
        name: "Wet Blankets",
        logo: "/src/assets/wet-blankets-logo.png"
    },
    {
        id: "wishlist-curiousity-bc",
        name: "Wishlist Curiousity BC",
        logo: "/src/assets/wishlist-curiousity-bc-logo.png"
    }
];

useEffect(() => {
  setTeams(data);
}, []);

  return (
    <div className="teams-container">
      {teams.length > 0 ? (teams.map((team) => (
        <Link key={team.id} to={`/teams/${team.id}`}>
          <TeamBtn team={team} />
        </Link>
      ))
    ) : (<h1>Loading...</h1>)}
    </div>
  );
}

export default Teams;   