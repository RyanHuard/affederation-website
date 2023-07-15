export const Passing = [
  {
    name: "Player",
    selector: (row) => `${row.first_name} ${row.last_name}`,
    sortable: true,
    cell: (row) => {
        console.log(row.logo)
      return (
        <div className="flex">
          <img src={`src/assets/logos/${row.team_logo}`} alt="Logo" width={30} />
          <span className="my-auto pl-2">{row.first_name} {row.last_name}</span>
        </div>
      );
    },
    width: "12rem",
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
    selector: (row) => row.completion_pct,
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
    selector: (row) => calculatePasserRating(row.attempts, row.completions,
        row.tds, row.interceptions, row.yards),
    sortable: true,
  },
  {
    name: "Sacks",
    selector: (row) => row.sacks,
    sortable: true,
  },
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
