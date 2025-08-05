import './TeamBtn.css';
import { ASSETS, getTeamLogo } from '../assets/assetRegistry';

function TeamBtn({ team, onMouseEnter }) {
    const logoPath = getTeamLogo(team.name);
    
    // Debug logging
    console.log('Team name:', team.name);
    console.log('Logo path:', logoPath);
    
    // Handle undefined logo
    if (!logoPath) {
        console.error(`No logo found for team: ${team.name}`);
        return (
            <div 
                className="team-btn-container"
                onMouseEnter={() => onMouseEnter(team)}
            >
                <div className="team-btn-img-placeholder">
                    {team.name}
                </div>
            </div>
        );
    }

    return (
        <div 
            className="team-btn-container"
            onMouseEnter={() => onMouseEnter(team)}
        >
            <img src={logoPath} alt={`${team.name} Logo`} className="team-btn-img" />
        </div>
    )
}

export default TeamBtn; 