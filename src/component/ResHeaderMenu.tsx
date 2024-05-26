"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { headerLink } from "@/constant/header";
import { IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
const ResHeaderMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  // condition
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      setIsLoggedin(user !== null);
    }
  }, [open]);
  // condition

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedin(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography className="p-[10px] font-semibold text-[20px]">
        Menu
      </Typography>
      <List>
        <Divider />
        {isLoggedin ? (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <Link href={"/profile"}>
                  <ListItemText primary={"My Profile"} />
                </Link>
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <Link href={"/login"}>
                  <ListItemText primary={"Login"} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link href={"/signup"}>
                  <ListItemText primary={"Signup"} />
                </Link>
              </ListItemButton>
            </ListItem>
          </>
        )}
        <Divider />
        {headerLink.map((value, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={value?.link}>
                <ListItemText primary={value.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <IoCartOutline className="text-[#000] w-[30px] h-[30px]" />
          </ListItemIcon>
          <Link href={"/wishlist"}>
            <ListItemButton className="p-0">
              <ListItemText primary={"Wishlist"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemIcon>
            <CiHeart className="text-[#000] w-[30px] h-[30px]" />
          </ListItemIcon>
          <Link href={"/cart"}>
            <ListItemButton className="p-0">
              <ListItemText primary={"Cart"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        {isLoggedin ? (
          <>
            <ListItem>
              <ListItemIcon>
                <IoIosLogOut className="text-[#000] w-[30px] h-[30px]" />
              </ListItemIcon>
              <ListItemButton onClick={handleLogout} className="p-0">
                <ListItemText primary={"logout"} />
              </ListItemButton>
            </ListItem>
          </>
        ) : null}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <IoMdMenu className="text-[#000] text-[20px]" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default ResHeaderMenu;
