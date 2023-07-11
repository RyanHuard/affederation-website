standings_query = """
        SELECT team_standings.team_id, 
               SUM(games.away_team_score) AS points_for, 
               SUM(games.home_team_score) AS points_against
        FROM team_standings
        LEFT JOIN games ON team_standings.team_id = games.away_team_id OR
                          team_standings.team_id = games.home_team_id
        GROUP BY team_standings.team_id
        ORDER BY team_standings.team_id
    """