// import React from "react";

// const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     const lowerCaseMessage = message.toLowerCase();

//     if (lowerCaseMessage.includes("hello")) {
//       actions.handleHello();
//     } else if (
//       lowerCaseMessage.includes("impressio") ||
//       lowerCaseMessage.includes("info")
//     ) {
//       actions.handleAbout();
//     } else if (
//       lowerCaseMessage.includes("features") ||
//       lowerCaseMessage.includes("what can i do")
//     ) {
//       actions.handleFeatures();
//     } else if (
//       lowerCaseMessage.includes("how to cast") ||
//       lowerCaseMessage.includes("casting help")
//     ) {
//       actions.handleCastingHelp();
//     } else if (lowerCaseMessage.includes("split casting")) {
//       actions.handleSplitCasting();
//     } else if (
//       lowerCaseMessage.includes("layout") ||
//       lowerCaseMessage.includes("manage layout")
//     ) {
//       actions.handleLayoutManagement();
//     } else if (
//       lowerCaseMessage.includes("automate") ||
//       lowerCaseMessage.includes("automatic")
//     ) {
//       actions.handleAutomation();
//     } else if (
//       lowerCaseMessage.includes("authentication") ||
//       lowerCaseMessage.includes("secure")
//     ) {
//       actions.handleAuthenticationInfo();
//     } else {
//       actions.handleAIResponse(message); // Fallback for unrecognized inputs
//     }
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions,
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;
