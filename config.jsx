import { createChatBotMessage } from "react-chatbot-kit";
import CastWidget from "./src/components/CastWidget";
import SuggestionWidget from "./src/components/SuggestionWidget";

const botName = "ImpressIO Agent";
const botAvatar =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='28'%20height='24'%20viewBox='0%200%2028%2024'%20fill='none'%3e%3cpath%20d='M8.44624%203.73828H0V12.0862H8.44624V3.73828Z'%20fill='%236FA8EC'/%3e%3cg%20style='mix-blend-mode:multiply'%3e%3cpath%20d='M6.97754%2023.9983L15.2889%2023.9748L8.41449%2012.0508L0.0180664%2012.086'%20fill='%23336EB5'/%3e%3c/g%3e%3cpath%20d='M9.60938%203.69141H21.1994L21.2115%209.55929L9.63486%209.5464L9.60938%203.69141Z'%20fill='%236FA8EC'/%3e%3cpath%20d='M21.2055%2012.0833V9.38281H16.4043V12.0833H21.2055Z'%20fill='%236FA8EC'/%3e%3cpath%20d='M14.9369%209.51953V12.0817L9.6333%2012.111V9.54123L14.9369%209.51953Z'%20fill='%236FA8EC'/%3e%3cg%20style='mix-blend-mode:multiply'%3e%3cpath%20d='M16.3095%2023.9937H27.9997L25.5417%2019.7109L18.8533%2019.7684H13.8804L16.3095%2023.9937Z'%20fill='%23336EB5'/%3e%3cpath%20d='M14.9375%2012.082L19.4221%2019.8084L13.8805%2019.7691L9.6333%2012.1114L14.9375%2012.082Z'%20fill='%23336EB5'/%3e%3cpath%20d='M16.4038%2012.0859L20.9027%2020.0522L25.5394%2019.6971L21.205%2012.0859H16.4038Z'%20fill='%23336EB5'/%3e%3c/g%3e%3cpath%20d='M2.16889%203.25003C3.05525%203.25003%203.77381%202.52249%203.77381%201.62502C3.77381%200.727545%203.05525%200%202.16889%200C1.28252%200%200.563965%200.727545%200.563965%201.62502C0.563965%202.52249%201.28252%203.25003%202.16889%203.25003Z'%20fill='%23336EB5'/%3e%3c/svg%3e";
const userAvatar =
  "https://s3-alpha-sig.figma.com/img/edc8/82c0/d070d31006108ebb5d1535d000813efb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qs30xyolJaKeDyIHr5220EIHNrZUuZFTXgg07YUoBR-rQG7BtyB19JuYgW50aW9KFsq3CA42m0UpdxARVwY7veyqogz-SJT2c-1u2OpJnAajtd-cC7Dlh3idlYtcPG0eCspWHJjK-JHEg4YXhpsNH9QTXHyW~ZxSaSluJwKiB~c48pP2WVn6qNEHtQ7QBYLe9xOIAGzUSrq-70ROuYjZppwXnH9E2xzCSEn6Ga-m1KCFMaI0ReX3XudK2CTeVu5Z0Id8n6b0PbhZkL6xuoo-s1l5w~Cj5NVBLfMLwugf~eTByPraxORJ4Byvqp4khmJW1~sSiopfi2mX1FxVi6V18w__";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm the ${botName}! How can I help you? 😀`),
    createChatBotMessage("Here are some things you can ask me", {
      widget: "suggestionWidget",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "castWidget",
      widgetFunc: (props) => <CastWidget {...props} />,
    },
    {
      widgetName: "suggestionWidget",
      widgetFunc: (props) => <SuggestionWidget {...props} />,
    },
  ],
  customComponents: {
    // Customize the bot's avatar
    botAvatar: (props) => (
      <div
        style={{
          width: "40px",
          height: "40px",
          padding: "8px",
          marginRight: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          outline: "1px solid #ccc",
          overflow: "hidden",
        }}
      >
        <img
          src={botAvatar}
          alt="Bot Avatar"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
    // Customize the user's avatar
    userAvatar: (props) => (
      <div
        style={{
          width: "40px",
          height: "40px",
          marginLeft: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          outline: "1px solid #ccc",
          overflow: "hidden",
        }}
      >
        <img
          src={userAvatar}
          alt="User Avatar"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
  },
};

export default config;
