import React from "react";
import welcomeBanner from "../../assets/welcome-banner.png";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <header className="bg-neutral-100">
        <img src={welcomeBanner} />
      </header>
      <div className="relative m-auto flex h-[1200px] max-w-7xl bg-slate-50">
        <div className="absolute left-0 hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <div className="absolute right-0 ml-auto hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <div className="lg:ml-4 lg:mr-4 mt-6 lg:max-w-7xl max-w-full flex gap-6 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;