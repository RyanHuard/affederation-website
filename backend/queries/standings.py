standings_query = """SELECT team_standings.*, teams.team_logo
FROM team_standings
JOIN teams ON team_standings.team_id = teams.team_id
ORDER BY team_standings.season_id, team_standings.wins DESC"""
