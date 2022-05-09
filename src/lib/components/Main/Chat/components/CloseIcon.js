import React from "react";

const Container = ({ children, ...rest }) => {
  return (
    <div className="rbc-close-icon" {...rest}>
      {children}
    </div>
  );
};

export default Container;
