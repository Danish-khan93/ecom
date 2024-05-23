import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
const Header = () => {
  return (
    <AppBar position="static" className="bg-[#000]">
      <Toolbar>
        <Box>
          <Typography>LOGO</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
