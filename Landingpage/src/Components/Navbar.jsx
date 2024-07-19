/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/nutrilogo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FcCalculator } from "react-icons/fc";
import { IoIosHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <IoIosHome />,
      Link: "/",
    },
    {
      text: "About",
      icon: <FaInfoCircle />,
      Link: "/",
    },
    {
      text: "Calculator",
      icon: <FcCalculator />,
      Link: "/",
    },
  ];
  return (
    <nav>
      <div className="navbarr">
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Calculator</a>
          <div className="searchcontent">
            <input type="text" placeholder="Search" className="search" />
            <a href="">
              <IoSearchCircleOutline className="navbar-cart-icon" />
            </a>
          </div>
        </div>
        <div className="btnsmanager">
          <button className="primary-button">Register</button>
          <button className="primary-button">Log In</button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
