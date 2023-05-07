import WatchList from "../../main/watchList";

function LeftPanel(props) {
    const {setWatchList, watchlist, watchlistPrice} = props;

  return (
    <>
      <WatchList setWatchList={setWatchList} watchlist={watchlist} watchlistPrice={watchlistPrice} />
    </>
  );
}

export default LeftPanel;
