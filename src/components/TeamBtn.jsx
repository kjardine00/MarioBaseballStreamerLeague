import './TeamBtn.css';
import { ASSETS, getTeamLogo } from '../assets/assetRegistry';

function TeamBtn({ team }) {
    return (
        <div className="team-btn-container">
            <img src={getTeamLogo(team.name)} alt={`${team.name} Logo`} className="team-btn-img" />
        </div>
    )
}

export default TeamBtn; 