import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Sidebar = styled(Paper)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(2),
  borderRadius: "0px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "auto", // Add overflow property for scrollable content
}));

const WatchlistItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  padding: "0.8rem",
});

const StockName = styled(Typography)({
  fontWeight: "bold",
  marginRight: "1rem",
  textAlign: "left",
});

const StockPrice = styled(Typography)({
  color: "#888",
});

function WatchList(props) {
  const { watchlist, watchlistPrice } = props;

  return (
    <>
      {/* Left Sidebar */}
      <Grid item xs={4}>
        <Sidebar>
          <Typography variant="h6">Watchlist</Typography>

          {watchlist.map((item) => (
            <WatchlistItem key={item.token}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <StockName>{item.name}</StockName>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <StockPrice>{watchlistPrice[item.token]?watchlistPrice[item.token]['price']:'-'}</StockPrice>
                  <StockPrice>{watchlistPrice[item.token]?watchlistPrice[item.token]['incPrice']:'-'} (+{watchlistPrice[item.token]?watchlistPrice[item.token]['perc']:'-'}%)</StockPrice>
                </Grid>
              </Grid>
            </WatchlistItem>
          ))}
        </Sidebar>
      </Grid>
    </>
  );
}

export default WatchList;
