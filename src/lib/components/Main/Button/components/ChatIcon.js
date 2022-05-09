import React from "react";

import Wrapper from "../../Wrapper";

const Container = ({ ...rest }) => {
  return (
    <Wrapper className="rbc-btn-chat-icon" {...rest}>
      💬
    </Wrapper>
  );
};

export default Container;
