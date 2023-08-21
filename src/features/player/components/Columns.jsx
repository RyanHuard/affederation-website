export const columns = [
  /* Passing */ [
    {
      name: "Season",
      selector: (row) => parseInt(row.season_id) + 2021,
      sortable: true,
      maxWidth: "2rem"
    },
    {
      name: "Team",
      selector: (row) => row.team,
       cell: (row) => {
        return <div className="flex">
          <img className="w-5 mr-1" src={`/src/assets/logos/${row.team_logo}`}/>
          <span className="my-auto">{row.team}</span>
        </div>
      }
    },
    {
      name: "Pass Yds",
      selector: (row) => row.yards,
      sortable: true,
    },
    {
      name: "Yds/Att",
      selector: (row) => {
        const yardsPerAttempt = row.yards_per_attempt;
        return Math.round(yardsPerAttempt * 10) / 10; // Round to 1 decimal place
      },
      sortable: true,
    },
    {
      name: "Att",
      selector: (row) => row.attempts,
      sortable: true,
    },
    {
      name: "Comp",
      selector: (row) => row.completions,
      sortable: true,
    },
    {
      name: "Comp %",
      selector: (row) => parseFloat(row.completion_pct).toFixed(1),
      sortable: true,
    },
    {
      name: "TD",
      selector: (row) => row.tds,
      sortable: true,
    },
    {
      name: "Int",
      selector: (row) => row.interceptions,
      sortable: true,
    },
    {
      name: "Rate",
      selector: (row) =>
        calculatePasserRating(
          row.attempts,
          row.completions,
          row.tds,
          row.interceptions,
          row.yards
        ),
      sortable: true,
    },
    {
      name: "Sacks",
      selector: (row) => row.sacks,
      sortable: true,
    },
  ],
  /* Rushing */ [
    {
      name: "Season",
      selector: (row) => parseInt(row.season_id) + 2021,
      sortable: true,
      maxWidth: "2rem"
    },
    {
      name: "Team",
      selector: (row) => row.team,
       cell: (row) => {
        return <div className="flex">
          <img className="w-5 mr-1" src={`/src/assets/logos/${row.team_logo}`}/>
          <span className="my-auto">{row.team}</span>
        </div>
      }
    },
    {
      name: "Rush Yds",
      selector: (row) => row.rush_yards,
      sortable: true,
    },
    {
      name: "Yds/Carry",
      selector: (row) => parseFloat(row.yards_per_carry).toFixed(1),
      sortable: true,
    },
    {
      name: "Carries",
      selector: (row) => row.rush_attempts,
      sortable: true,
    },
    {
      name: "TD",
      selector: (row) => row.rush_tds,
      sortable: true,
    },
    {
      name: "Long",
      selector: (row) => row.long,
      sortable: true,
    },
    {
      name: "Fumbles",
      selector: (row) => row.fumbles,
      sortable: true,
    },
  ],
  /* Receiving */ [
    {
      name: "Season",
      selector: (row) => parseInt(row.season_id) + 2021,
      sortable: true,
      maxWidth: "2rem"
    },
    {
      name: "Team",
      selector: (row) => row.team, cell: (row) => {
        return <div className="flex">
          <img className="w-5 mr-1" src={`/src/assets/logos/${row.team_logo}`}/>
          <span className="my-auto">{row.team}</span>
        </div>
      },
    },
    {
      name: "Rec Yds",
      selector: (row) => row.receiving_yards,
      sortable: true,
    },
    {
      name: "Yds/Rec",
      selector: (row) =>
        parseFloat(row.receiving_yards_per_reception).toFixed(1),
      sortable: true,
    },
    {
      name: "Yds/G",
      selector: (row) =>
        Math.round((row.receiving_yards / row.games_played) * 10) / 10,
      sortable: true,
    },
    {
      name: "TD",
      selector: (row) => row.receiving_tds,
      sortable: true,
    },
    {
      name: "Targets",
      selector: (row) => row.receiving_targets,
      sortable: true,
    },
  ],
  /* Defense */ [
    {
      name: "Season",
      selector: (row) => parseInt(row.season_id) + 2021,
      sortable: true,
      maxWidth: "2rem"
    },
    {
      name: "Team",
      selector: (row) => row.team, cell: (row) => {
        return <div className="flex">
          <img className="w-5 mr-1" src={`/src/assets/logos/${row.team_logo}`}/>
          <span className="my-auto">{row.team}</span>
        </div>
      },
      
    },
    {
      name: "Tackles",
      selector: (row) => row.tackles,
      sortable: true,
    },
    {
      name: "Sacks",
      selector: (row) => row.sacks,
      sortable: true,
    },
    {
      name: "Int",
      selector: (row) => row.interceptions,
      sortable: true,
    },
    {
      name: "Int Yds",
      selector: (row) => row.interception_yards,
      sortable: true,
    },
    {
      name: "TFL",
      selector: (row) => row.tackles_for_loss,
      sortable: true,
    },
    {
      name: "Deflections",
      selector: (row) => row.deflections,
      sortable: true,
    },
  ],
];

import { clamp, round } from "lodash";

// Calculates passer rating according to NFL formula
// https://en.wikipedia.org/wiki/Passer_rating#NFL_and_CFL_formula
// Dependencies required: lodash (clamp, round)
const calculatePasserRating = (
  attempts,
  completions,
  touchdowns,
  interceptions,
  yards
) => {
  if (attempts === 0) return 0;
  const a = clamp((completions / attempts - 0.3) * 5, 0, 2.375);
  const b = clamp((yards / attempts - 3) * 0.25, 0, 2.375);
  const c = clamp((touchdowns / attempts) * 20, 0, 2.375);
  const d = clamp(2.375 - (interceptions / attempts) * 25, 0, 2.375);

  return round(((a + b + c + d) / 6) * 100, 1);
};
