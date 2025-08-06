import './Pages.css';

function Rules() {
    return (
        <div className="rules-container">
            <h1>All-Star Superstar Baseball League And Streamer Tournament</h1>
            <h2>Official Rulebook</h2>

            <h2>Roster</h2>
            <p>Characters: 12 players participate in an auction draft consisting of 120 characters and 12 stadiums. The roster list is subject to change until the draft,
                 {/* but is currently displayed below: */}
                 </p>
            <p>(Note: 2nd Yellow Pianta has replaced 2nd Goomba) </p>
            
            {/* Character roster image would go here
            <div className="roster-image">
                <img src="/assets/character-roster.png" alt="Character Roster" />
            </div> */}

            <h2>Draft</h2>
            <p><strong>Auction Budget:</strong> Teams will be given a $120 budget for their 10 roster spots plus 1 stadium. You must hold $1 for each remaining roster spot. If all remaining players only have $1 spots left, whoever queued the character for $1 will win the bid. If you fill your roster and have money left over, it is dead money.</p>
            
            <p><strong>Character Selection:</strong> The player order of queueing auction characters will be set alphabetically. The 1-2 players next up in the queue behind the current bidder should either queue or determine which character will be bid on next.</p>
            
            <p><strong>Bidding:</strong> A player will make an opening bid on their queued character. The auctioneer will facilitate the auction and also make the final call on who entered a bid first, and if a bid was entered before the character was declared sold.</p>
            

            <h2>Captains</h2>
            <p><strong>Captain Characters:</strong> Each team must have at least one captain character on their roster.</p>
            
            <p><strong>In-Game Captain Designation:</strong> Teams do not have to have a single designated captain for the season and may play any of the 12 Captain characters as Captain depending on the matchup.</p>

            <h2>Season</h2>
            <p><strong>Structure:</strong> 3-game series, interleague series, schedule randomized, All-Star Superstar Baseball League And Streamer Tournament, 9-inning games.</p>
            
            <p><strong>Fielder Swapping:</strong> One free swap per game, additional swaps with pitcher changes, swaps if pitcher is tired.</p>
            
            <p><strong>Scheduling:</strong> Games scheduled based on player availability, about 1 series per week, inform league if unavailable.</p>
            
            <p><strong>Playoffs:</strong> Seeding: wins, H2H, differential. Division winners get top seeds. BO1, BO3, BO5.</p>
            
            <p><strong>Streaming:</strong> Games will ideally be streamed/recorded and highlights posted to the Discord server.</p>

            <h2>Pitcher Rotations</h2>
            <p><strong>Pitcher Rest Requirements:</strong> No character can pitch all 3 games, no pitcher can start consecutive games. Duplicate characters with differing handedness: only two duplicates, one left-handed and one right-handed, may pitch. This rule only applies to pitching handedness, not batting.</p>
            
            <p><strong>Starting Pitcher Determination:</strong> "Starting pitcher" requirement: at least 3 innings or until tired. Pitchers returning to a game and rest requirements resetting per series.</p>

            <h2>Trades</h2>
            <p><strong>Trade Fairness:</strong> Trades must be 1:1, 2:2, etc. (no 2-for-1 or 3-for-1), as each team needs 10 characters and a stadium. Trades can involve multiple owners and require mutual agreement. Stadiums can also be traded if another stadium is received.</p>
            
            <p><strong>Trade Deadline:</strong> A trade deadline will be set 1-2 weeks before the end of the regular season.</p>

            <h2>Other Rules</h2>
            <p><strong>Addendums/Rulings:</strong> Commissioner(s) may add addendums to rules during the season if needed and agreed upon by the majority of players, and may make emergency rulings.</p>
        </div>
    )
}

export default Rules;