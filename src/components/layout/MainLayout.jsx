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
      <header className="hidden w-full lg:block mt-6">{header}</header>

      <main className="h-full max-w-[80rem] lg:px-4 lg:pt-6 mx-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
