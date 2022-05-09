import React from "react";

import ChatClick from "./components/ChatClick";
import ChatIcon from "./components/ChatIcon";
import useTheme from "../../../hooks/useTheme";

const IconContainer = ({ chatButtonComponent }) => {
  const { theme } = useTheme();

  const { containerStyle } = theme;

  const chatStyle = { ...containerStyle, width: 50, height: 50 };
  const propsStyle = { ...containerStyle, width: "auto" };

  return chatButtonComponent ? (
    <div style={propsStyle}>{chatButtonComponent}</div>
  ) : (
    <ChatClick theme={theme} chatStyle={chatStyle}>
      <ChatIcon>{chatButtonComponent}</ChatIcon>
    </ChatClick>
  );
};

export default IconContainer;
