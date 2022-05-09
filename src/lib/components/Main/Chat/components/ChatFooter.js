import React from "react";

import Wrapper from "../../Wrapper";

const Container = ({ children, error, ...rest }) => {
  return (
    <Wrapper
      className="rbc-chat-footer"
      style={{ background: error ? "#F05F41" : "#fff" }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
