import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import LeftPanel from "./component/leftPanel";
import RightPanel from "./component/rightPanel";
import Subscribe from "./component/socket/Subscribe";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme();

function App() {
  const [watchlistPrice, setWatchListPrice] = useState([]);
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    const tokens = watchlist.map((item) => item.token);

    Subscribe(tokens, setWatchListPrice);
  }, [watchlist]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <LeftPanel
          setWatchList={setWatchList}
          watchlist={watchlist}
          watchlistPrice={watchlistPrice}
        />

        <RightPanel watchlistPrice={watchlistPrice} setWatchListPrice={setWatchListPrice} setWatchList={setWatchList} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
