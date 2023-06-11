function Subscribe(tokens, setWatchListPrice) {
  const generateRandomPrice = () => {
    // Generate a random price (for demonstration, using a random number between 1 and 100)
    var cpo =  Math.floor(Math.random() * 10000) + 1;
    console.log('cpo :',cpo);
    return cpo;
  };

  const generateRandomPricePercentage = () => {
    // Generate a random price (for demonstration, using a random number between 1 and 100)
    return Math.floor(Math.random() * 100) + 1;
  };

  const generateRandomIncPrice = () => {
    // Generate a random price (for demonstration, using a random number between 1 and 100)
    return Math.floor(Math.random() * 100) + 1;
  };

  console.log("tokens :", tokens);
  for (var i = 0; i <= 10; i++) {
    console.log('Hello Ashish :',i)
    tokens.map((token) => {
    
      setWatchListPrice((previous) => ({
        ...previous,
        [token]: {
          price: generateRandomPrice(),
          perc: generateRandomPricePercentage(),
          incPrice: generateRandomIncPrice(),
        },
      }));
    });
  }

  // tokens.map((row) => {
  //   setWatchListPrice((previous) => [
  //     ...previous,
  //     [row]: {
  //       price: generateRandomPrice(),
  //       perc: generateRandomPricePercentage(),
  //       incPrice: generateRandomIncPrice(),
  //     },
  //   ]);
  // });
  // const tokenPrices = tokens.reduce((result, token) => {
  //   result[token] = {
  //       price: generateRandomPrice(),
  //       perc: generateRandomPricePercentage(),
  //       incPrice: generateRandomIncPrice(),
  //   };
  //   return result;
  // }, {});

  // setWatchListPrice(tokenPrices);
}
export default Subscribe;
