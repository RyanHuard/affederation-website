import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Image,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import { Navigate } from "react-router-dom";

import { auth, signInWithGoogle, signOutWithGoogle } from "src/firebase";
import navRoutes from "../routes";
import affLogo from "src/assets/aff-logo.png";
import "./Navbar.css";
//import { isManager } from "../../../../../protected-route/ProtectedRoute";

const DesktopNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorElement, setAnchorElement] = useState(null);
  const openAccountMenu = Boolean(anchorElement);

  const navigate = useNavigate();

  const handleAccountClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleAccountClose = () => {
    setAnchorElement(null);
  };

  useEffect(() => {
    if (auth.currentUser) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [auth.currentUser]);

  return (
    <div className="hidden md:block" style={{ height: "inherit" }}>
      <Flex
        py="5"
        className="m-auto max-w-7xl px-6 text-white"
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

        <Menu open={openAccountMenu} onClose={handleAccountClose}>
          <MenuButton onClick={handleAccountClick} className="ml-auto">
            <Person2Icon className="" sx={{ fontSize: "2rem" }} />
          </MenuButton>
          <MenuList color="black">
            {loggedIn ? (
              <>
                {/* {isManager(auth.currentUser.uid) && 
                  <MenuItem onClick={() => {navigate("/upload-article")}}>
                    {console.log(isManager(auth.currentUser.uid))}
                    Publish Article
                  </MenuItem>
                } */}
                <MenuItem
                  onClick={() => {
                    signOutWithGoogle();
                    handleAccountClose();
                  }}
                >
                  Log Out
                </MenuItem>
              </>
            ) : (
              <MenuItem
                onClick={() => {
                  signInWithGoogle();
                  handleAccountClose();
                }}
              >
                Log In
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
      <ToastContainer autoClose={3000} pauseOnHover={false} hideProgressBar />
    </div>
  );
};

export default DesktopNavbar;
