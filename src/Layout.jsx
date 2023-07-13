import React from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children, header }) => {
  const location = useLocation();
  const shouldRenderHender = location.pathname === "/";

  return (
    <div className="bg-[#edeef2] pb-24">
      <div className="w-screen">{header}</div>
      <div className="relative m-auto flex max-w-7xl justify-center">
        {/* <div className="absolute left-0 hidden h-full w-8 bg-aff-orange lg:block" />
      <div className="absolute right-0 ml-auto hidden h-full w-8 bg-aff-orange lg:block" /> */}
        <main className="relative flex-grow lg:mx-4 lg:mt-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
