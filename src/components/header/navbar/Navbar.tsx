import React from "react";
import { Image, Flex, Button, HStack } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";

import affLogo from "../../../assets/aff-logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="h-14 bg-neutral-800 lg:h-16">
      <Flex
        px="6"
        py="5"
        className="m-auto max-w-7xl text-white"
        height="inherit"
      >
        <HStack spacing="24px" as="nav">
          <Link to="/">
            <Image src={affLogo} className="mr-4 h-9 lg:h-10" />
          </Link>
          <NavLink to="/standings" className="font-semibold">
            Standings
          </NavLink>
          <NavLink to="/schedule" className="font-semibold">
            Schedule
          </NavLink>
          <NavLink to="/teams" className="font-semibold">
            Teams
          </NavLink>
          <NavLink to="/stats" className="font-semibold">
            Stats
          </NavLink>
        </HStack>
      </Flex>
    </div>
  );
};

export default Navbar;
