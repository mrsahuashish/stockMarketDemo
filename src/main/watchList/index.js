import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

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
  const { setWatchList, watchlist, watchlistPrice } = props;

  const watchlistArray = [
    {
      name: "TATAMOTORS",
      token: "1_100",
    },
    {
      name: "BLS",
      token: "1_101",
    },
    {
      name: "BATAINDIA",
      token: "1_102",
    },
    {
      name: "INDIGO",
      token: "1_103",
    },
    {
      name: "TCS",
      token: "1_104",
    },
    {
      name: "INFY",
      token: "1_105",
    },
    {
      name: "LT",
      token: "1_106",
    },
    {
      name: "LTMI",
      token: "1_107",
    },
    {
      name: "TITAN",
      token: "1_108",
    },
    {
      name: "BAJFINANCE",
      token: "1_109",
    },
    {
      name: "BAJAJFINSV",
      token: "1_110",
    },
    {
      name: "DMART",
      token: "1_111",
    },
    {
      name: "TATAELEXSI",
      token: "1_112",
    },
    {
      name: "DLF",
      token: "1_113",
    },
    {
      name: "IRB",
      token: "1_114",
    },
    {
      name: "JUBLFOOD",
      token: "1_115",
    },
    {
      name: "ITC",
      token: "1_116",
    },
    {
      name: "GODREJCP",
      token: "1_117",
    },
    {
      name: "DABUR",
      token: "1_118",
    },
    {
      name: "AWL",
      token: "1_119",
    },
    {
      name: "LINDEINDIA",
      token: "1_120",
    },
    {
      name: "LXCHEM",
      token: "1_121",
    },
    {
      name: "XPROINDIA",
      token: "1_122",
    },
    {
      name: "RALLIS",
      token: "1_123",
    },
    {
      name: "RALLIS",
      token: "1_124",
    },
    {
      name: "DEEPAKFERT",
      token: "1_125",
    },
    {
      name: "FIEMIND",
      token: "1_126",
    },
    {
      name: "VBL",
      token: "1_127",
    },
    {
      name: "ASIANPAINT",
      token: "1_128",
    },
    {
      name: "BERGEPAINT",
      token: "1_129",
    },
    {
      name: "INDIGOPNTS",
      token: "1_130",
    },
    {
      name: "ACC",
      token: "1_131",
    },
    {
      name: "JKCEMENT",
      token: "1_132",
    },
    {
      name: "PIDILITIND",
      token: "1_133",
    },
    {
      name: "BOROLTD",
      token: "1_134",
    },
    {
      name: "TATAELXSI",
      token: "1_135",
    },
    {
      name: "DIXON",
      token: "1_136",
    },
    {
      name: "MOSCHIP",
      token: "1_137",
    },
    {
      name: "SPELS",
      token: "1_138",
    },
    {
      name: "RIR",
      token: "1_139",
    },
    {
      name: "ASMTEC",
      token: "1_140",
    },
    {
      name: "EXIDEIND",
      token: "1_141",
    },
  ];

  useEffect(()=>{
    setWatchList(watchlistArray)
  },[watchlistArray])
  

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
