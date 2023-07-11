import React from "react";

const InfoCard = ({ title, body, img }) => {
  return (
    <div className="h-72 w-72 border-[3px] bg-white p-6 relative lg:m-0 m-auto">
      <img src={img} className="w-14 absolute -top-7 left-7" />

    <div className="py-6 text-left">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="py-6">{body}</div>
      </div>
    </div>
  );
};


export default InfoCard;
