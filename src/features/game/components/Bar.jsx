import React from "react";

const Bar = ({ away, home, title }) => {
  let away_percentage =
    (Number(away) / (Number(away) + Number(home))).toFixed(2) * 100;
  let home_percentage =
    (Number(home) / (Number(away) + Number(home))).toFixed(2) * 100;

  const awayWidth = { width: `${away_percentage}%` };
  const homeWidth = { width: `${home_percentage}%` };

  return (
    <div className="mb-8">
      <div className="flex h-6 justify-between">
        <p>{Number(away).toFixed(1)}</p>
        <p>{title}</p>
        <p>{Number(home).toFixed(1)}</p>
      </div>
      <div className="flex">
        <div style={awayWidth} className={`mr-[2px] h-1 bg-aff-orange`} />
        <div style={homeWidth} className={`ml-[2px] h-1 bg-aff-blue`} />
      </div>
    </div>
  );
};

export default Bar;
