import React from "react";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";

const Navbar = () => {
  return (
    <nav className="h-14 bg-neutral-800 lg:h-16">
        <MobileNavbar />
        <DesktopNavbar />
    </nav>
  );
};

export default Navbar;
