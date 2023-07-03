schedule_query = "SELECT games.game_id, games.season_id,\
        away.team_location, away.team_name,\
        home.team_location, home.team_name,\
        games.away_team_score, games.home_team_score,\
        (SELECT t.wins\
        FROM team_standings t\
        WHERE games.away_team_id = t.team_id AND games.season_id = t.season_id) \
        AS away_team_wins,\
        (SELECT t.loss\
        FROM team_standings t\
        WHERE games.away_team_id = t.team_id AND games.season_id = t.season_id) \
        AS away_team_loss,\
        (SELECT t2.wins\
        FROM team_standings t2\
        WHERE games.home_team_id = t2.team_id AND games.season_id = t2.season_id) \
        AS home_team_wins,\
        (SELECT t2.loss\
        FROM team_standings t2\
        WHERE games.home_team_id = t2.team_id AND games.season_id = t2.season_id) \
        AS home_team_loss, away.team_logo, home.team_logo, away.abbreviation, home.abbreviation\
        FROM games\
        JOIN teams away ON games.away_team_id = away.team_id\
        JOIN teams home ON games.home_team_id = home.team_id"