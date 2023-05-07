import React, { useState } from "react";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const pages = [
    { title: "Portfolio", path: "/portfolio" },
    { title: "Order", path: "/order" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dev Stock Market
        </Typography>
        {pages.map((page) => (
          <MenuItem key={page.title} component={Link} to={page.path}>
            <Typography textAlign="center">{page.title}</Typography>
          </MenuItem>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
