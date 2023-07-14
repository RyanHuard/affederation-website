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
      <header className="hidden w-full lg:block">{header}</header>
      <div className="relative m-auto flex  max-w-7xl justify-center">
        <main className="relative flex-grow lg:mx-4 lg:mt-6  ">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
