import React from "react";
import { useSearchParams } from "react-router-dom";
import LZString from "lz-string";

const Output = () => {
  // Get the query parameters
  const [searchParams] = useSearchParams();
  // Extract the 'data' parameter from the query string
  const data = searchParams.get("data");
  const layout = JSON.parse(LZString.decompressFromEncodedURIComponent(data));

  const gridWidth = window.innerWidth;
  const rowHeight = window.innerHeight / 9;

  return (
    <div
      className="w-full h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: `repeat(9, ${rowHeight}px)`,
      }}
    >
      {layout.map((item) => (
        <div
          key={item.i}
          className="border border-black"
          style={{
            gridColumn: `${item.x + 1} / span ${item.w}`,
            gridRow: `${item.y + 1} / span ${item.h}`,
          }}
        >
          {item.content_type === "Web URL" ? (
            <iframe
              src={item.content_value}
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              scrolling="no"
            ></iframe>
          ) : (
            <img
              src={item.content_value}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Output;
