import React from 'react';
import {
  ChatClick,
  ChatIcon
} from './styles';

const IconContainer = ({ style }) => {
  const { positionStyles } = style;

  return (
    <ChatClick style={positionStyles}>
      <ChatIcon />
    </ChatClick>
  );
}

export default IconContainer;