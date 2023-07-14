import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, CloseButton, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import affLogo from "src/assets/aff-logo.png";

import SideNavigation from "./SideNavigation";

const MobileNavbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  // Inherits height because the wrapper div changes height of navbar.
  // the divs are needed for mobile visibility being hidden and display
  return (
    <div
      className="px-6 flex items-center justify-between md:hidden"
      style={{ height: "inherit" }}
    >
      <Link to="/" onClick={() => setOpenSidebar(false)}>
        <Image src={affLogo} className="mr-4 h-9 lg:h-10" />
      </Link>
      {!openSidebar ? (
        <IconButton
          icon={<HamburgerIcon boxSize={8} color="white" />}
          variant="unstyled"
          onClick={() => setOpenSidebar(true)}
        />
      ) : (
        <CloseButton
          onClick={() => setOpenSidebar(false)}
          color="white"
          size="lg"
        />
      )}
      {openSidebar && <SideNavigation setOpenSidebar={setOpenSidebar} />}
    </div>
  );
};

export default MobileNavbar;
