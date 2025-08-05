import { getStadiumImage } from "../assets/assetRegistry";
import "./StadiumBackground.css";

function StadiumBackground({ stadium }) {
    if (!stadium) {
        return null;
    }
    
    return(
        <div className="stadium-background">
            <img src={getStadiumImage(stadium)} alt={`${stadium} Stadium`} className="stadium-background-img" />
        </div>
    )
}

export default StadiumBackground;