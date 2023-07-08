import React from "react";
import welcomeBanner from "../../assets/welcome-banner.png";

const HomeLayout = ({ children }) => {
  return (
    <div className="bg-[#f2f4f7] ">
      <header className="hidden lg:block">
        <img src={welcomeBanner} />
      </header>
      <div className="relative m-auto flex max-w-7xl">
        <div className="absolute left-0 hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <div className="absolute right-0 ml-auto hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <main className="h-[1200px]  lg:ml-4 lg:mr-4 lg:mt-6">
          <div
            className="mobile-homepage-divide flex-wrap 
            gap-6 lg:flex lg:divide-none"
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
