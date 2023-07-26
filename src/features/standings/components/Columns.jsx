import { useMediaQuery } from "@chakra-ui/react";

const columns = [
  {
    name: "Rank",
    selector: (row, index) => index + 1,
    width: "6rem",
    hide: "sm",
  },
  {
    name: "Team",
    selector: (row) => row.team,
    sortable: true,
    cell: (row) => {
      return (
        <div className="flex">
          <img src={`./logos/${row.team_logo}`} alt="Team Logo" width={30} />
          <span className="my-auto hidden pl-2 sm:block">{row.team}</span>
          <span className="my-auto pl-2 sm:hidden">{row.stats_team_city}</span>
        </div>
      );
    },
    width: () => {
      const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
      return isSmallerThan600 ? "8rem" : "16rem";
    },
  },
  {
    name: "W",
    selector: (row) => row.wins,
    sortable: true,
  },
  {
    name: "L",
    selector: (row) => row.loss,
    sortable: true,
  },
  {
    name: "PCT",
    selector: (row) =>
      row.wins != 0
        ? parseFloat(row.wins / (row.loss + row.wins)).toFixed(3)
        : "N/A",
    sortable: true,
  },
  {
    name: "PF",
    selector: (row) => row.points_for,
    sortable: true,
  },
  {
    name: "PA",
    selector: (row) => row.points_against,
    sortable: true,
  },
  {
    name: "P+/-",
    selector: (row) => row.points_for - row.points_against,
    sortable: true,
  },
];

export default columns;
