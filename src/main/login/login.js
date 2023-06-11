import React, { useState } from "react";
import { Grid, Paper, Button, TextField } from "@mui/material";
import loginLeftSideImage from "../../../src/images/light/loginLeftSideImage.png";
import ImageContainer from "./ImageContainer";

function Login({ handleLogin }) {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or login request here
    // You can use the mobileNumber state to send the data to the server

    // Simulate a successful login for demonstration purposes
    handleLogin();
  };

  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={6}>
        <Paper>
          <ImageContainer />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              fullWidth
              required
            />
            <Button type="submit" variant="contained" className="">
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
