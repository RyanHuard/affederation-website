import { Link } from "react-router-dom";

export const columns = [
  /* Passing */ [
    {
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase()}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
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
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase().replaceAll(" ", "-")}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
    },
    {
      name: "Rush Yds",
      selector: (row) => row.rush_yards,
      sortable: true,
    },
    {
      name: "Yds/Carry",
      selector: (row) => parseFloat(row.yards_per_carry),
      sortable: true,
      cell: (row) => (
        <div>{parseFloat(row.yards_per_carry).toFixed(1)}</div>
      )
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
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase()}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
    },
    {
      name: "Rec Yds",
      selector: (row) => row.receiving_yards,
      sortable: true,
    },
    {
      name: "Rec",
      selector: (row) => row.receptions,
      sortable: true,
    },
    {
      name: "Yds/Rec",
      selector: (row) => parseFloat(row.receiving_yards_per_reception),
      sortable: true,
      cell: (row) => (
        <div>{parseFloat(row.receiving_yards_per_reception).toFixed(1)}</div>
      )
    },
    {
      name: "Yds/G",
      selector: (row) => Math.round(row.receiving_yards/row.games_played * 10) / 10,
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
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase()}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
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
  /* Kicking */ [
    {
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase()}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
    },
    {
      name: "FG Made",
      selector: (row) => row.fg_made,
      sortable: true,
    },
    {
      name: "FG Att",
      selector: (row) => row.fg_attempts,
      sortable: true,
    },
    {
      name: "FG %",
      selector: (row) => row.fg_percentage * 100,
      sortable: true,
      cell: (row) => (
        <div>{parseFloat(row.fg_percentage*100).toFixed(1)}</div>
      )
    },
    {
      name: "FG Long",
      selector: (row) => row.fg_long,
      sortable: true,
    },
    {
      name: "XP Made",
      selector: (row) => row.xp_made,
      sortable: true,
    },
    {
      name: "XP Att",
      selector: (row) => row.xp_attempts,
      sortable: true,
    },
    {
      name: "FG %",
      selector: (row) => row.xp_percentage,
      sortable: true,
      cell: (row) => (
        <div>{parseFloat(row.xp_percentage*100).toFixed(1)}</div>
      )
    },
  ],
  /* Punting */ [
    {
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase()}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
    },
    {
      name: "Gross Avg",
      selector: (row) => parseFloat(row.gross_yards_per_punt).toFixed(1),
      sortable: true,
    },
    {
      name: "Net Avg",
      selector: (row) => parseFloat(row.net_yards_per_punt).toFixed(1),
      sortable: true,
    },
    {
      name: "Net Yds",
      selector: (row) => row.net_yards,
      sortable: true,
    },
    {
      name: "Punts",
      selector: (row) => row.punt_count,
      sortable: true,
    },
    {
      name: "Long",
      selector: (row) => row.long,
      sortable: true,
    },
    {
      name: "Gross Yds",
      selector: (row) => row.gross_yards,
      sortable: true,
    },
    {
      name: "Touchbacks",
      selector: (row) => row.touchbacks,
      sortable: true,
    },
  ],
  
  /* Kickoff Returns */ [
    {
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase()}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
    },
    {
      name: "K Avg",
      selector: (row) => {
        const yardsPerAttempt = row.yards_per_return;
        return Math.round(yardsPerAttempt * 10) / 10; // Round to 1 decimal place
      },
      sortable: true,
    },
    {
      name: "K Ret",
      selector: (row) => row.count,
      sortable: true,
    },
    {
      name: "K Yds",
      selector: (row) => row.yards,
      sortable: true,
    },
    {
      name: "K TD",
      selector: (row) => row.tds,
      sortable: true,
    },
    {
      name: "K Long",
      selector: (row) => row.long,
      sortable: true,
    },
  ],

  /* Punt Returns */ [
    {
      name: "Player",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
      cell: (row) => {
        return (
          <Link to={`/players/${row.first_name.toLowerCase()}-${row.last_name.toLowerCase()}`}>
          <div className="flex">
            <img
              src={`/assets/logos/${row.team_logo}`}
              alt="Logo"
              width={30}
            />
            <div className="my-auto pl-2">
              {row.first_name} {row.last_name}
              <span className="px-[6px]">·</span>
              <span className="text-neutral-500">{row.position}</span>
            </div>
          </div>
          </Link>
        );
      },
      width: "16rem",
    },
    {
    name: "P Avg",
    selector: (row) => {
      const yardsPerAttempt = row.yards_per_return;
      return Math.round(yardsPerAttempt * 10) / 10; // Round to 1 decimal place
    },
    sortable: true,
    },
    {
    name: "P Ret",
    selector: (row) => row.count,
    sortable: true,
    },
    {
    name: "P Yds",
    selector: (row) => row.yards,
    sortable: true,
    },
    {
    name: "P TD",
    selector: (row) => row.tds,
    sortable: true,
    },
    {
    name: "P Long",
    selector: (row) => row.long,
    sortable: true,
    },
  ]
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
