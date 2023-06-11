import React, { useEffect, useState } from 'react';
import loginLeftSideImage from "../../../src/images/light/loginLeftSideImage.png";
const ImageContainer = () => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateContainerSize = () => {
      const windowWidth = window.innerWidth;
      console.log('windowWidth :',windowWidth);
      const windowHeight = window.innerHeight;
      setContainerSize({ width: windowWidth, height: windowHeight });
    };

    // Update the container size on initial mount
    updateContainerSize();

    // Update the container size on window resize
    window.addEventListener('resize', updateContainerSize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

  const { width, height } = containerSize;

  return (
    <div style={{ height, display: 'flex', alignItems: 'center' }}>
      <img
        src={loginLeftSideImage}
        alt="Login Image"
        style={{ width: '100%', maxWidth: '100vw', maxHeight: '100%', }}
      />
    </div>
  );
};

export default ImageContainer;
