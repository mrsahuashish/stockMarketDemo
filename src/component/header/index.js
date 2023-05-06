import React, { useState } from "react";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";

function Header() {
  const pages = ["Portfolio", "Order"];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Header Menu
        </Typography>
        {pages.map((page) => (
          <MenuItem key={page}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
