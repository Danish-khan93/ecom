"use client"
import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { headerLink } from "@/constant/header";
import { IoMdMenu } from "react-icons/io";
 const ResHeaderMenu:React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
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
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}> <IoMdMenu className="text-[#000] text-[20px]"/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


export default ResHeaderMenu