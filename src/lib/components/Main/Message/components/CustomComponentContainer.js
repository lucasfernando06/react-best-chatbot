import React from "react";
import Wrapper from "../../Wrapper";

const Container = ({ children, ...rest }) => {
  return (
    <Wrapper className="rbc-message-custom-container" {...rest}>
      {children}
    </Wrapper>
  );
};

export default Container;
