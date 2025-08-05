import { getStadiumImage } from "../assets/assetRegistry";
import "./StadiumBackground.css";
import { useState, useEffect } from "react";

function StadiumBackground({ stadium }) {
    const [currentImage, setCurrentImage] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (!stadium) {
            setCurrentImage(null);
            return;
        }

        const newImage = getStadiumImage(stadium);
        
        if (currentImage && currentImage !== newImage) {
            // Start transition
            setIsTransitioning(true);
            
            // Wait for fade out, then change image and fade in
            setTimeout(() => {
                setCurrentImage(newImage);
                setIsTransitioning(false);
            }, 250); // Half of the transition duration
        } else {
            setCurrentImage(newImage);
        }
    }, [stadium, currentImage]);

    if (!stadium) {
        return null;
    }
    
    return(
        <div className="stadium-background">
            <img 
                src={currentImage} 
                alt={`${stadium} Stadium`} 
                className="stadium-background-img"
                style={{ opacity: isTransitioning ? 0 : 1 }}
            />
        </div>
    )
}

export default StadiumBackground;