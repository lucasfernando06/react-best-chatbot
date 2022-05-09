import React from "react";

import Wrapper from "../../Wrapper";
import useTheme from "../../../../hooks/useTheme";

const Container = ({ children, newStyle, ...rest }) => {
  const { theme } = useTheme();
  return (
    <Wrapper
      className="rbc-message-options-option"
      style={{
        background: theme.secondaryColor,
        color: theme.textSecondaryColor,
      }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
