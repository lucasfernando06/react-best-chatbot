import React from "react";

import Wrapper from "../../Wrapper";

const Container = ({ children, ...rest }) => {
  return (
    <Wrapper className="rbc-chat-header-box" {...rest}>
      {children}
    </Wrapper>
  );
};

export default Container;
