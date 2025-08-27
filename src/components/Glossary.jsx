import "../styles/TeamPage.css";

function Glossary({ statType }) {
  if (statType === "batting") {
    return (
      <div className="glossary">
        <h3>GLOSSARY</h3>
        <div className="glossary-content">
          <ul className="glossary-list">
            <li className="glossary-item"><span className="abbr">GP:</span> Games Played</li>
            <li className="glossary-item"><span className="abbr">H:</span> Hits</li>
            <li className="glossary-item"><span className="abbr">AB:</span> At Bats</li>
            <li className="glossary-item"><span className="abbr">S:</span> Singles</li>
            <li className="glossary-item"><span className="abbr">D:</span> Doubles</li>
            <li className="glossary-item"><span className="abbr">T:</span> Triples</li>
            <li className="glossary-item"><span className="abbr">HR:</span> Home Runs</li>
            <li className="glossary-item"><span className="abbr">TB:</span> Total Bases</li>
            <li className="glossary-item"><span className="abbr">RBI:</span> Runs Batted In</li>
            <li className="glossary-item"><span className="abbr">BB:</span> Walks</li>
            <li className="glossary-item"><span className="abbr">K:</span> Strikeouts</li>
            <li className="glossary-item"><span className="abbr">AVG:</span> Batting Average</li>
            <li className="glossary-item"><span className="abbr">OBP:</span> On-Base Percentage</li>
            <li className="glossary-item"><span className="abbr">SLG:</span> Slugging Percentage</li>
            <li className="glossary-item"><span className="abbr">OPS+:</span> On-Base Plus Slugging Percentage</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="glossary">
        <h3>GLOSSARY</h3>
        <div className="glossary-content">
          <ul className="glossary-list">
            <li className="glossary-item"><span className="abbr">GP:</span> Games Played</li>
            <li className="glossary-item"><span className="abbr">P:</span> Pitches</li>
            <li className="glossary-item"><span className="abbr">Op. BB:</span> Walks Pitched</li>
            <li className="glossary-item"><span className="abbr">Op. H:</span> Hits Allowed</li>
            <li className="glossary-item"><span className="abbr">K:</span> Strikeouts Pitched</li>
            <li className="glossary-item"><span className="abbr">Star P:</span> Star Pitches</li>
            <li className="glossary-item"><span className="abbr">W:</span> Wins</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Glossary;
