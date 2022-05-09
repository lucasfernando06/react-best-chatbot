import React from "react";

const Container = ({ disabled, children, ...rest }) => {
  return (
    <div
      className="rbc-send-icon"
      style={{
        cursor: !disabled ? "pointer" : "inherit",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
