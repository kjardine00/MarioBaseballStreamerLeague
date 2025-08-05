import './TeamBtn.css';
import { ASSETS, getTeamLogo } from '../assets/assetRegistry';

function TeamBtn({ team, onMouseEnter }) {
    return (
        <div 
            className="team-btn-container"
            onMouseEnter={() => onMouseEnter(team)}
        >
            <img src={getTeamLogo(team.name)} alt={`${team.name} Logo`} className="team-btn-img" />
        </div>
    )
}

export default TeamBtn; 