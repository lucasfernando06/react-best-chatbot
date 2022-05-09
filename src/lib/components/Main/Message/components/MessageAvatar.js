import React from "react";

const Container = ({ children, ...rest }) => {
  return (
    <img alt="Avatar" className="rbc-message-avatar" {...rest}>
      {children}
    </img>
  );
};

export default Container;
