import React from "react";

import { ThemeProvider } from "./contexts/ThemeContext";
import Main from "./components/Main";

import BotImage from "./assets/bot.png";

import "./index.css";

const defaultTheme = {
  primaryColor: "#484a49",
  secondaryColor: "#D53634",
  textPrimaryColor: "#FFFFFF",
  textSecondaryColor: "#FFFFFF",
  background: "#F0F0F0",
  containerStyle: {
    width: 330,
    position: "fixed",
    bottom: 20,
    right: 20,
  },
};

const defaultOptions = {
  header: <span style={{ color: "#FFFFFF" }}>Bot</span>,
  inputPlaceholder: "Type in your message...",
  endContent: "End...",
  botAvatarSrc: BotImage,
  messageDelay: 500,
  sendComponentFunction: () => "🟢",
  loadingComponent: "Loading...",
  refreshComponent: "🔵",
  closeComponent: "🔴",
  openingCallback: () => {},
  closingCallback: () => {},
  endingCallback: () => {},
  sendingMessageCallback: () => {},
};

const ChatBot = ({
  theme: themeProps = {},
  options: optionsProps = {},
  steps,
}) => {
  const theme = Object.assign({}, defaultTheme, themeProps);
  const options = Object.assign({}, defaultOptions, optionsProps);

  const componentProps = {
    options,
    steps,
  };

  return (
    <ThemeProvider theme={theme}>
      <Main theme={theme} {...componentProps} />
    </ThemeProvider>
  );
};

export default ChatBot;
