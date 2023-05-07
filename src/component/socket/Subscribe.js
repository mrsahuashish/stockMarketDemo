function Subscribe(tokens, setWatchListPrice) {
  
  const generateRandomPrice = () => {
    // Generate a random price (for demonstration, using a random number between 1 and 100)
    return Math.floor(Math.random() * 10000) + 1;
  };

  const generateRandomPricePercentage = () => {
    // Generate a random price (for demonstration, using a random number between 1 and 100)
    return Math.floor(Math.random() * 100) + 1;
  };

  const generateRandomIncPrice = () => {
    // Generate a random price (for demonstration, using a random number between 1 and 100)
    return Math.floor(Math.random() * 100) + 1;
  };

  const tokenPrices = tokens.reduce((result, token) => {
    result[token] = {
        price: generateRandomPrice(),
        perc: generateRandomPricePercentage(),
        incPrice: generateRandomIncPrice(),
    };
    return result;
  }, {});

  setWatchListPrice(tokenPrices);
}
export default Subscribe;
