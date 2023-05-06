import WatchList from "../../main/watchList";

function LeftPanel(props) {
    const {watchlist, watchlistPrice} = props;

  return (
    <>
      <WatchList watchlist={watchlist} watchlistPrice={watchlistPrice} />
    </>
  );
}

export default LeftPanel;
