import twitchIcon from "/assets/icons/twitch-svg-purple.svg";
import "./TwitchBtn.css";

function TwitchBtn({ team }) {
    return (
        <a href={team.twitch} className="twitch-btn" target="_blank" rel="noopener noreferrer">
            <img src={twitchIcon} alt="Twitch Icon" className="twitch-svg"/>
            <h1 className="twitch-text">{team.manager}</h1>
        </a>
    )
}

export default TwitchBtn;