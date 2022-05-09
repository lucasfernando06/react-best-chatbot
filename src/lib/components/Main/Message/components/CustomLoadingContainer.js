import React from "react";
import Wrapper from "../../Wrapper";

const Container = ({ children, theme, marginLeft, ...rest }) => {
  return (
    <Wrapper
      className="rbc-message-custom-loading"
      style={{
        marginLeft,
      }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
