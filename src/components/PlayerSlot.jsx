import { getPlayerIcon } from "../assets/assetRegistry";
import '../components/PlayerSlot.css';

function PlayerSlot({ player }) {

    // console.log("PlayerSlot - player:", player);
    const iconPath = getPlayerIcon(player);
    // console.log("PlayerSlot - iconPath:", iconPath);
    
    return (
        <div className="player-slot">
            <img 
                src={iconPath} 
                alt={player} 
                className="player-slot-img"
                onError={(e) => {
                    console.error(`Failed to load image for ${player}:`, iconPath);
                    e.target.style.display = 'none';
                }}
            />
        </div>
    )
}

export default PlayerSlot;