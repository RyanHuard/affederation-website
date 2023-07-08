home_standings_query = "SELECT ts.stats_team_city, ts.team_id, ts.season_id, ts.team, ts.wins, ts.loss, ts.division, t.team_logo \
FROM team_standings ts \
JOIN teams t ON ts.team_id = t.team_id \
WHERE ts.season_id = (SELECT MAX(season_id) FROM team_standings)"
