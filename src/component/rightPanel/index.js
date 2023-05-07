import Header from "../header";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "../../main/portFolio";

const RightDiv = styled(Paper)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "0px",
  color: theme.palette.text.secondary,
}));

function RightPanel(props) {
  const { watchlistPrice, setWatchListPrice, setWatchList } = props;
  return (
    <>
      <Grid item xs={8}>
        <Router>
          <Grid item xs={12}>
            <Header />
            <Routes>
              <Route path="/portfolio" element={<Portfolio watchlistPrice={watchlistPrice} setWatchListPrice={setWatchListPrice} setWatchList={setWatchList} />} />
            </Routes>
          </Grid>
        </Router>
      </Grid>
    </>
  );
}

export default RightPanel;
