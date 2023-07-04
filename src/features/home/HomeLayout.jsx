import React from "react";
import welcomeBanner from "../../assets/welcome-banner.png";

const HomeLayout = ({ children }) => {
  return (
    <div className=" bg-slate-50">
      <header>
        <img src={welcomeBanner} />
      </header>
      <div className="relative m-auto flex h-[1200px] max-w-7xl">
        <div className="absolute left-0 hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <div className="absolute right-0 ml-auto hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <div className="mt-6 flex max-w-full gap-6 lg:ml-4 lg:mr-4 lg:max-w-7xl ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
