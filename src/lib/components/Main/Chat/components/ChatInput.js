import React from "react";

const Container = ({ ...rest }) => {
  return <input className="rbc-chat-input" {...rest} />;
};

export default Container;
