player_stat_columns = {
    "passing": {
        "selections": [
            "CONCAT(SUM(match_pass_completions), '/', SUM(match_pass_attempts))",
            "SUM(match_pass_yards)",
            "SUM(match_pass_tds)",
            "SUM(match_pass_ints)",
            "SUM(match_pass_sacks)",
        ],
        "criteria": "match_pass_attempts > 0",
        "categories": [
            "name",
            "team",
            "completions_and_attempts",
            "yards",
            "tds",
            "interceptions",
            "sacks",
        ],
    },
    "rushing": {
        "selections": [
            "SUM(match_rush_attempts)",
            "SUM(match_rush_yards)",
            "SUM(match_rush_tds)",
            "ROUND(CAST(SUM(match_rush_yards) AS DECIMAL)/SUM(match_rush_attempts), 1)",
            "MAX(match_rush_long)",
        ],
        "criteria": "match_rush_attempts > 0",
        "categories": [
            "name",
            "team",
            "rush_attempts",
            "rush_yards",
            "rush_tds",
            "yards_per_carry",
            "long",
        ],
    },
    "receiving": {
        "selections": [
            "SUM(match_receiving_receptions)",
            "SUM(match_receiving_yards)",
            "ROUND(CAST(SUM(match_receiving_yards) AS DECIMAL)/SUM(match_receiving_receptions), 1)",
            "SUM(match_receiving_tds)",
            "SUM(match_receiving_targets)",
            "SUM(match_receiving_long)",
        ],
        "criteria": "match_receiving_receptions > 0",
        "categories": [
            "name",
            "team",
            "receptions",
            "receiving_yards",
            "receiving_yards_per_reception",
            "receiving_tds",
            "receiving_targets",
            "long",
        ],
    },
    "defense": {
        "selections": [
            "SUM(match_defense_tackles)",
            "SUM(match_defense_sacks)",
            "SUM(match_defense_int)",
            "SUM(match_defense_int_yards)",
            "SUM(match_defense_deflections)",
            "SUM(match_defense_tackles_for_loss)",
        ],
        "criteria": "match_defense_tackles > 0",
        "categories": [
            "name",
            "team",
            "tackles",
            "sacks",
            "interceptions",
            "interception_yards",
            "deflections",
            "tackles_for_loss",
        ],
    },
    "kicking": {
        "selections": [
            "CONCAT(SUM(match_kick_fg_made), '/', SUM(match_kick_fg_attempts))",
            "MAX(match_kick_fg_long)",
            "ROUND(CAST(SUM(match_kick_fg_made) AS DECIMAL)/NULLIF(SUM(match_kick_fg_attempts), 0), 1)",
            "CONCAT(SUM(match_kick_xp_made), '/', SUM(match_kick_xp_attempts))",
        ],
        "criteria": "(match_kick_xp_attempts > 0 OR match_kick_fg_attempts > 0)",
        "categories": [
            "name",
            "team",
            "fg_attempts_and_made",
            "fg_long",
            "fg_percentage",
            "xp_attempts_and_made",
        ],
    },
    "punting": {
        "selections": [
            "SUM(match_punt_net_yards)",
            "SUM(match_punt_count)",
            "MAX(match_punt_long)",
            "SUM(match_punt_touchbacks)",
        ],
        "criteria": "match_punt_count > 0",
        "categories": [
            "name",
            "team",
            "net_yards",
            "punt_count",
            "long",
            "touchbacks",
        ],
    },
    "kick_return": {
        "selections": [
            "SUM(match_kick_return_count)",
            "SUM(match_kick_return_yards)",
            "SUM(match_kick_return_tds)",
            "MAX(match_kick_return_long)",
        ],
        "criteria": "match_kick_return_count > 0",
        "categories": [
            "name",
            "team",
            "count",
            "yards",
            "tds",
            "long",
        ],
    },
    "punt_return": {
        "selections": [
            "SUM(match_punt_return_count)",
            "SUM(match_punt_return_yards)",
            "SUM(match_punt_return_tds)",
            "MAX(match_punt_return_long)",
        ],
        "criteria": "match_punt_return_count > 0",
        "categories": [
            "name",
            "team",
            "count",
            "yards",
            "tds",
            "long",
        ],
    },
}
