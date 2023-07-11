import React from "react";
import { useLocation } from "react-router-dom";

import welcomeBanner from "../../assets/welcome-banner.png";

const HomeLayout = ({ children }) => {
  return (
    <div
      className="mobile-homepage-divide  
            block grid-cols-9 gap-6 lg:grid lg:divide-none"
    >
      {children}
    </div>
  );
};

export default HomeLayout;
