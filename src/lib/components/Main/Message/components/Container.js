import React from "react";
import Wrapper from "../../Wrapper";

const Container = ({ children, isUser, ...rest }) => {
  return (
    <Wrapper
      className="rbc-message-container"
      style={{
        alignItems: isUser ? "flex-end" : "flex-start",
      }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
