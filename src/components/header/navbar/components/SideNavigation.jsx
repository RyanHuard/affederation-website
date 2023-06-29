import React from "react";
import { Link } from "react-router-dom";
import { Flex, IconButton } from "@chakra-ui/react";

import navRoutes from "../routes";

const SideNavigation = () => {
  return (
    <>
      <Flex
        className="fixed left-0 top-14 h-screen w-screen
        flex-col overflow-y-auto bg-neutral-800"
      >
        <Flex flexDir="column" align="center" className="text-white">
          {navRoutes.map((route, index) => {
            return (
              <Link to={route.to} key={index} className="m-2 text-l font-semibold">
                {route.name}
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default SideNavigation;
