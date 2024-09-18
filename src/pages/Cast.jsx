import React, { useEffect, useState } from "react";
import CastComponent from "../components/CastComponent";

const Cast = () => {
  const [casting, setCasting] = useState(false);

  useEffect(() => {
    if (window.cast && window.cast.framework) {
      // Google Cast API is available
      const castContext = window.cast.framework.CastContext.getInstance();
      castContext.setOptions({
        receiverApplicationId:
          window.cast.framework.CastContext.DEFAULT_MEDIA_RECEIVER_APP_ID,
      });
    }
  }, []);

  const startCasting = () => {
    if (window.cast && window.cast.framework) {
      const castContext = window.cast.framework.CastContext.getInstance();
      castContext
        .requestSession()
        .then((session) => {
          console.log("Session started:", session);
          const mediaInfo = new window.cast.framework.MediaInfo(
            "https://example.com/video.mp4",
            "video/mp4"
          );
          const request = new window.cast.framework.LoadRequest(mediaInfo);
          session
            .loadMedia(request)
            .then(() => {
              console.log("Media loaded successfully.");
              setCasting(true);
            })
            .catch((error) => {
              console.error("Error loading media:", error);
            });
        })
        .catch((error) => {
          console.error("Error starting session:", error);
        });
    } else {
      console.error("Cast API not available.");
    }
  };

  const stopCasting = () => {
    if (window.cast && window.cast.framework) {
      const castContext = window.cast.framework.CastContext.getInstance();
      const session = castContext.getCastSession();
      if (session) {
        session
          .endSession(true)
          .then(() => {
            console.log("Casting stopped.");
            setCasting(false);
          })
          .catch((error) => {
            console.error("Error stopping casting:", error);
          });
      }
    } else {
      console.error("Cast API not available.");
    }
  };

  return (
    <div>
      <h1>Google Cast App</h1>
      <button onClick={startCasting}>Start Casting</button>
      <button onClick={stopCasting}>Stop Casting</button>
      {casting && <p>Currently casting...</p>}
    </div>
  );
};

export default Cast;
