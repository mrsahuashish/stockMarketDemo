import { useEffect } from "react";
import Position from "./position";

function Portfolio(props) {
  const { watchlistPrice, setWatchListPrice, setWatchList } = props;
  const watchlistArray = [
    {
      name: "ABCAPITAL",
      token: "1_400",
    },
    {
      name: "SBIN",
      token: "1_401",
    },
    {
      name: "IDFCFIRSTB",
      token: "1_402",
    },
    {
      name: "HDFC",
      token: "1_403",
    },
    {
      name: "ICICIBANK",
      token: "1_404",
    },
    {
      name: "AXISBANK",
      token: "1_405",
    },
    {
      name: "BANKBARODA",
      token: "1_406",
    },
    {
      name: "YESBANK",
      token: "1_407",
    },
    {
      name: "ONGC",
      token: "1_408",
    },
    {
      name: "BPCL",
      token: "1_409",
    },
    {
      name: "GSPL",
      token: "1_410",
    },
    {
      name: "IOC",
      token: "1_411",
    },
    {
      name: "TTML",
      token: "1_412",
    },
    {
      name: "BHARTIARTL",
      token: "1_413",
    },
    {
      name: "TEJASNET",
      token: "1_414",
    },
    {
      name: "IDEA",
      token: "1_415",
    },
    {
      name: "GTLINFRA",
      token: "1_416",
    },
    {
      name: "KPITTECH",
      token: "1_417",
    },
    {
      name: "ASHOKLEY",
      token: "1_418",
    },
    {
      name: "OLECTRA",
      token: "1_419",
    },
    {
      name: "TVSMOTOR",
      token: "1_420",
    },
    {
      name: "NMDC",
      token: "1_421",
    },
    {
      name: "SAIL",
      token: "1_422",
    },
    {
      name: "ELCHERMOT",
      token: "1_423",
    },
    {
      name: "TATAPOWER",
      token: "1_424",
    },
    {
      name: "COALINDIA",
      token: "1_425",
    },
    {
      name: "JSWSTEEL",
      token: "1_426",
    },
  ];

  useEffect(()=>{
    setWatchList((previous) => [...previous, ...watchlistArray]);
    
  },[watchlistArray])
  return (
    <>
      <Position watchlistArray={watchlistArray} watchlistPrice={watchlistPrice} setWatchListPrice={setWatchListPrice}/>
    </>
  );
}
export default Portfolio;
