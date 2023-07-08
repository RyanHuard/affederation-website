import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f2f4f7]">
      <div className="relative m-auto flex max-w-7xl">
        <div className="absolute left-0 hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <div className="absolute right-0 ml-auto hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
        <main className="relative h-[1200px] w-[78rem] lg:ml-4 lg:mr-4 lg:mt-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
