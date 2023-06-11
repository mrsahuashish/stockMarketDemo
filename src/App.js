import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { beforeLoginRoutes, afterLoginRoutes } from "./routesConfig";

const theme = createTheme();

// Placeholder component for unknown routes
const NotFound = () => {
  return <h1>404 Not Found</h1>;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Router>
          <Routes>
            {!loggedIn ? (
              beforeLoginRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component handleLogin={handleLogin} />}
                />
              ))
            ) : (
              afterLoginRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))
            )}
            <Route path="/" element={<Navigate to={loggedIn ? "/dashboard" : "/login"} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
