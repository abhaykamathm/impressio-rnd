import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Olympics from "./pages/Olympics";
import Grid from "./pages/Grid";
import Output from "./pages/Output";
import LayoutBuilder from "./pages/LayoutBuilder";
import LayoutMapper from "./pages/LayoutMapper";
import EncryptionPage from "./pages/Encrypt";
import SplitCasting from "./pages/SplitCasting";
import Canvas from "./pages/Canvas";
import Stretch from "./pages/Stretch";
import VideoWall from "./pages/Mask";
import Crop from "./pages/Crop";
import SplitLayoutGenerator from "./pages/SplitLayoutGenerator";
import Cast from "./pages/Cast";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Crop />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/grid" element={<Grid />} /> */}
          <Route path="/encrypt" element={<EncryptionPage />} />
          {/* <Route path="/olympics" element={<Olympics />} /> */}
          <Route path="/split-casting" element={<SplitCasting />} />
          <Route path="/layout-builder" element={<LayoutBuilder />} />
          <Route path="/layout-mapper" element={<LayoutMapper />} />
          <Route path="/custom-layout-output" element={<Output />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/stretch" element={<Stretch />} />
          <Route path="/mask" element={<VideoWall />} />
          <Route path="/split-layout" element={<SplitLayoutGenerator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// const App = () => {
//   const [apiAvailable, setApiAvailable] = useState(false);
//   const [casting, setCasting] = useState(false);
//   useEffect(() => {
//     // Enhanced logging to detect when the Cast API becomes available
//     console.log("Checking if Cast API is available...");
//     window["__onGCastApiAvailable"] = function (isAvailable) {
//       console.log("Google Cast API callback triggered.");
//       if (isAvailable) {
//         console.log("Google Cast API is available.");
//         setApiAvailable(true);
//         // Initialize the Cast context
//         const castContext = window.cast.framework.CastContext.getInstance();
//         castContext.setOptions({
//           receiverApplicationId:
//             chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
//           autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
//         });
//         console.log("Cast context initialized.");
//       } else {
//         console.error("Google Cast API not available.");
//       }
//     };
//   }, []);
//   const startCasting = () => {
//     if (apiAvailable && window.cast && window.cast.framework) {
//       console.log("Starting cast session...");
//       const castContext = window.cast.framework.CastContext.getInstance();
//       castContext
//         .requestSession()
//         .then((session) => {
//           console.log("Cast session started:", session);
//           const mediaInfo = new chrome.cast.media.MediaInfo(
//             "https://www.example.com/sample-video.mp4",
//             "video/mp4"
//           );
//           const request = new chrome.cast.media.LoadRequest(mediaInfo);
//           session
//             .loadMedia(request)
//             .then(() => {
//               console.log("Media loaded successfully.");
//               setCasting(true);
//             })
//             .catch((error) => {
//               console.error("Error loading media:", error);
//             });
//         })
//         .catch((error) => {
//           console.error("Error starting session:", error);
//         });
//     } else {
//       console.error("Cast API not available or not initialized.");
//     }
//   };
//   const stopCasting = () => {
//     if (apiAvailable && window.cast && window.cast.framework) {
//       console.log("Stopping cast session...");
//       const castContext = window.cast.framework.CastContext.getInstance();
//       const session = castContext.getCurrentSession();
//       if (session) {
//         session
//           .endSession(true)
//           .then(() => {
//             console.log("Casting stopped.");
//             setCasting(false);
//           })
//           .catch((error) => {
//             console.error("Error stopping casting:", error);
//           });
//       } else {
//         console.log("No active session to stop.");
//       }
//     } else {
//       console.error("Cast API not available or not initialized.");
//     }
//   };
//   return (
//     <div>
//       <h1>Google Cast Test App</h1>
//       {apiAvailable ? (
//         <>
//           <button is="google-cast-button" onClick={startCasting}>
//             Start Casting
//           </button>
//           <button onClick={stopCasting}>Stop Casting</button>
//           {casting && <p>Currently casting...</p>}
//         </>
//       ) : (
//         <p>Loading Google Cast API...</p>
//       )}
//     </div>
//   );
// };
// export default App;
