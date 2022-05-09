import React from "react";

import Wrapper from "../../Wrapper";

const Container = ({ children, ...rest }) => {
  return (
    <Wrapper className="rbc-chat-text" {...rest}>
      {children}
    </Wrapper>
  );
};

export default Container;
