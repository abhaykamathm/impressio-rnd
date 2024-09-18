import React from "react";
import mo from "/mo.webp";

const VideoWall = () => {
  const imageSrc = mo; // Path to your image
  const tvSize = { width: 500, height: 350 }; // Adjust the TV size here
  const gridSize = 2; // 2x2 grid

  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
      {/* TV 1 */}
      <div
        className="bg-no-repeat border-2 border-white"
        style={{
          width: `${tvSize.width}px`,
          height: `${tvSize.height}px`,
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: `0% 0%`,
          backgroundSize: `${tvSize.width * gridSize}px ${
            tvSize.height * gridSize
          }px`,
        }}
      ></div>

      {/* TV 2 */}
      <div
        className="bg-no-repeat border-2 border-white"
        style={{
          width: `${tvSize.width}px`,
          height: `${tvSize.height}px`,
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: `100% 0%`,
          backgroundSize: `${tvSize.width * gridSize}px ${
            tvSize.height * gridSize
          }px`,
        }}
      ></div>

      {/* TV 3 */}
      <div
        className="bg-no-repeat border-2 border-white"
        style={{
          width: `${tvSize.width}px`,
          height: `${tvSize.height}px`,
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: `0% 100%`,
          backgroundSize: `${tvSize.width * gridSize}px ${
            tvSize.height * gridSize
          }px`,
        }}
      ></div>

      {/* TV 4 */}
      <div
        className="bg-no-repeat border-2 border-white"
        style={{
          width: `${tvSize.width}px`,
          height: `${tvSize.height}px`,
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: `100% 100%`,
          backgroundSize: `${tvSize.width * gridSize}px ${
            tvSize.height * gridSize
          }px`,
        }}
      ></div>
    </div>
  );
};

export default VideoWall;
