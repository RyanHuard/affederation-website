import React from "react";
import { Image, Flex, HStack } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";

import navRoutes from "../routes";
import affLogo from "../../../../assets/aff-logo.png";
import "./Navbar.css";

const DesktopNavbar = () => {
  return (
    <div className="hidden md:block" style={{ height: "inherit"}}>
      <Flex
        py="5"
        className="m-auto max-w-7xl text-white"
        height="inherit"
      >
        <HStack spacing="24px" as="nav">
          <Link to="/">
            <Image src={affLogo} className="mr-4 h-9 lg:h-10" />
          </Link>
          {navRoutes.map((route, index) => {
            return (
              <NavLink to={route.to} className="font-semibold" key={index}>
                {route.name}
              </NavLink>
            );
          })}
        </HStack>
      </Flex>
    </div>
  );
};

export default DesktopNavbar;
