// import React from "react";

// const SuggestionWidget = ({ actions, setState }) => {
//   const options = [
//     "What is ImpressIO?",
//     "How do I cast?",
//     "Tell me about split casting.",
//   ];

//   const handleOptionClick = (option) => {
//     // Trigger the MessageParser to handle the user message
//     actions.handleSuggestion(option);
//   };

//   return (
//     <div className="flex flex-col space-y-2">
//       {options.map((option, index) => (
//         <button
//           key={index}
//           onClick={() => handleOptionClick(option)}
//           className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default SuggestionWidget;
