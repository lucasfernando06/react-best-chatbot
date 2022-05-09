import React from "react";
import Wrapper from "../../Wrapper";

const Container = ({ marginLeft, children, ...rest }) => {
  return (
    <Wrapper
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
