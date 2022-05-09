import React from "react";

import Wrapper from "../../Wrapper";

const Container = ({ children, theme, chatStyle, ...rest }) => {
  return (
    <Wrapper
      className="rbc-btn-chat"
      style={{
        ...chatStyle,
        background: theme.primaryColor,
      }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
