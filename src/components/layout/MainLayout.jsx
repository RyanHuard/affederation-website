import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./header/Header";
import Navbar from "src/components/layout/header/components/navbar/Navbar";

const MainLayout = ({ children, header }) => {
  const location = useLocation();
  const shouldRenderHender = location.pathname === "/";

  return (
    <div className="bg-[#edeef2] pb-24">
      <Header />
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <header>{header}</header>
      {/* <div className="absolute ml-[19.5rem] left-0 hidden h-[1200px] w-8 bg-[#e49740] lg:block" />
      <div className="absolute right-0 ml-auto  mr-[19.5rem] hidden h-[1200px] w-8 bg-[#e49740] lg:block" /> */}

      <main className="mx-auto max-w-[80rem] pb-24 lg:px-4 sm:pt-12 min-h-[970px]">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
