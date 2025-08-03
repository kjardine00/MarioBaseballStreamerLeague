import './TeamBtn.css';

function TeamBtn({ team }) {
    return (
        <div className="team-btn-container">
            <img src={team.logo} alt={`${team.name} Logo`} className="team-btn-img" />
        </div>
    )
}

export default TeamBtn; 