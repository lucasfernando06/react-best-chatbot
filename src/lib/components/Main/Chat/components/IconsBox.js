import React from "react";

import Wrapper from "../../Wrapper";

const Container = ({ children, ...rest }) => {
  return (
    <Wrapper className="rbc-icons-box" {...rest}>
      {children}
    </Wrapper>
  );
};

export default Container;
