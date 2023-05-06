import Header from "../header";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const RightDiv = styled(Paper)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius:"0px",
  color: theme.palette.text.secondary,
}));

function RightPanel() {
  return (
    <>
      <Grid item xs={8}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <RightDiv>
          {/* Right Panel Content */}
          <h3>Right Panel</h3>
          {/* Add your right panel content here */}
        </RightDiv>
      </Grid>
    </>
  );
}

export default RightPanel;
