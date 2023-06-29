import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

import affLogo from "../../../../assets/aff-logo.png";
import { IconButton, CloseButton } from "@chakra-ui/react";
import SideNavigation from "./SideNavigation";

const MobileNavbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  // Inherits height because the wrapper div changes height of navbar.
  // the divs are needed for mobile visibility hidden/display
  return (
    <div
      className="mx-6 flex items-center justify-between md:hidden"
      style={{ height: "inherit" }}
    >
      <img src={affLogo} className="h-9" />
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
