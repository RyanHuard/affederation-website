import React from "react";
import { Link } from "react-router-dom";
import { Flex, IconButton } from "@chakra-ui/react";

import navRoutes from "../routes";

const SideNavigation = ({ setOpenSidebar }) => {
  return (
    <>
      <Flex
        className="fixed left-0 top-36 h-screen w-screen
        flex-col overflow-y-auto bg-[#013369]"
      >
        <Flex flexDir="column" align="center" className="text-white">
          {navRoutes.map((route, index) => {
            return (
              <Link
                to={route.to}
                key={index}
                className="text-l m-2 font-semibold"
                onClick={() => setOpenSidebar(false)}
              >
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
