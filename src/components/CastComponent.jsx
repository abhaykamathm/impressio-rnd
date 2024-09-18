import React, { useState } from "react";

const CastComponent = () => {
  const [casting, setCasting] = useState(false);

  const startCasting = () => {
    if (window.cast && window.cast.framework) {
      const castContext = window.cast.framework.CastContext.getInstance();
      castContext
        .start({ url: "https://example.com/video.mp4" })
        .then(() => {
          setCasting(true);
          console.log("Casting started.");
        })
        .catch((error) => {
          console.error("Error starting casting:", error);
        });
    } else {
      console.error("Cast API not available.");
    }
  };

  const stopCasting = () => {
    if (window.cast && window.cast.framework) {
      const castContext = window.cast.framework.CastContext.getInstance();
      castContext
        .end()
        .then(() => {
          setCasting(false);
          console.log("Casting stopped.");
        })
        .catch((error) => {
          console.error("Error stopping casting:", error);
        });
    } else {
      console.error("Cast API not available.");
    }
  };

  return (
    <div>
      <button onClick={startCasting}>Start Casting</button>
      <button onClick={stopCasting}>Stop Casting</button>
    </div>
  );
};

export default CastComponent;
