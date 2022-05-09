import React from "react";

const Container = ({ children, ...rest }) => {
  return (
    <div className="rbc-refresh-icon" {...rest}>
      {children}
    </div>
  );
};

export default Container;
