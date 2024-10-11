import React from "react";
import { useLocation } from "react-router-dom";

const Crop = () => {
  const location = useLocation();

  // Extract query parameters
  const params = new URLSearchParams(location.search);
  const url = params.get("url");
  const zoomX = params.get("zoomX") || 1;
  const zoomY = params.get("zoomY") || 1;
  const xOffset = params.get("xOffset") || 0;
  const yOffset = params.get("yOffset") || 0;
  const rotation = params.get("rotate") || 0;

  const styles = {
    transform: `scaleX(${zoomX}) scaleY(${zoomY}) translate(${xOffset}%, ${yOffset}%) rotate(${rotation}deg)`,
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <iframe
        src={url}
        style={styles}
        className="w-[100vw] h-[100vh] border-none origin-top-left"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        // scrolling="no"
        title="TV Display"
      />
    </div>
  );
};

export default Crop;
