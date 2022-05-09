import React from "react";

import Wrapper from "../../Wrapper";
import useTheme from "../../../../hooks/useTheme";

const Container = ({ children, isUser, ...rest }) => {
  const { theme } = useTheme();
  const {
    primaryColor,
    secondaryColor,
    textPrimaryColor,
    textSecondaryColor,
  } = theme;

  return (
    <Wrapper
      className="rbc-message"
      style={{
        background: !isUser ? primaryColor : secondaryColor,
        borderTopLeftRadius: isUser ? "20px" : "0px",
        borderTopRightRadius: isUser ? "0px" : "20px",
        color: isUser ? textSecondaryColor : textPrimaryColor,
      }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
