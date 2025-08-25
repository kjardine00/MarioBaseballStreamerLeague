Batting:

GP: Games Played = misc.game_appearances
H: Hits = summary_hits
AB: At Bats = summary_at_bats
S: Singles = summary_singles
D: Doubles = summary_doubles
T: Triples = summary_triples
HR: Home Runs = summary_homeruns
TB: Total Bases = summary_total_bases
RBI: Runs Batted In = summary_rbi
BB: Walks Taken = summary_walks_bb
SF: Sacrifice Flies = summary_sac_flys
PA: Plate Appearances = plate_appearances
K: Strikeouts = summary_strikeouts
?SB : Stolen Bases = ???
Avg: Average = calc(summary_hits / summary_at_bats)
OBP: On Base Percentage = calc((summary_hits + summary_walks_bb + summary_walks_hbp) / summary_at_bats)
SLG: Slugging Percentage = calc(summary_total_bases / summary_at_bats)
OPS+: On Base Plus Slugging Plus = calc(OBP + SLG)

Pitching:

GP: Games Played = misc.game_appearances
P: Pitches = total_pitches
Op. BB: Walks Pitched = summary_walks_bb + summary_walks_hbp
Op. H: Hits Allowed = hits_allowed
K: Strikeouts Pitched = strikeouts_pitched
Star P: Star Pitches = star_pitches_thrown
W: Wins = misc.home_wins + misc.away_wins

