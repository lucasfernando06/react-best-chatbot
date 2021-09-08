import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Main from './components/Main';
import { defaultOptions, defaultSteps } from './components/Example';

import BotAvatar from './assets/bot.png';

import './index.css';

const styleDefault = {
  primaryColor: '#4C5270',
  secondaryColor: '#F652A0',
  textColor: '#fff',
  background: '#f0f0f0',
  positionStyles: {
    position: 'fixed',
    bottom: 20,
    right: 20
  },
  width: 330
};

const optionsDefault = {
  header: 'Bot',
  sendMessage: 'Type in your message...',
  endContent: 'End...',
  useExample: false,
  useEmoji: true,
  botAvatarSrc: BotAvatar,
  messageDelay: 1000,
  openingCallback: () => { },
  closingCallback: () => { },
  endingCallback: () => { },
  sendingMessageCallback: () => { },
};

const Container = ({ style = {}, options = {}, steps }) => {

  const theme = {
    ...styleDefault,
    ...style
  };

  const config = {
    ...optionsDefault,
    ...options
  };

  const componentProps = {
    options: options && options.useExample ? defaultOptions : config,
    steps: options && options.useExample ? defaultSteps : steps,
  };

  return (
    <ThemeProvider theme={theme}>
      <Main style={theme} {...componentProps} />
    </ThemeProvider>
  )
}

Container.propTypes = {
  style: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    textColor: PropTypes.string,
    background: PropTypes.string,
    positionStyles: PropTypes.object,
    width: PropTypes.number,
  }),
  options: PropTypes.shape({
    useExample: PropTypes.bool,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    sendMessage: PropTypes.string,
    endContent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    botAvatarSrc: PropTypes.string,
    open: PropTypes.bool,
    openInSeconds: PropTypes.number,
    hidden: PropTypes.bool,
    messageDelay: PropTypes.number,
    sendComponent: PropTypes.element,
    buttonComponent: PropTypes.element,
    loadingComponent: PropTypes.element,
    openingCallback: PropTypes.func,
    closingCallback: PropTypes.func,
    endingCallback: PropTypes.func,
    sendingMessageCallback: PropTypes.func,
  }),
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    content: PropTypes.string,
    receiveInput: PropTypes.bool,
    delay: PropTypes.number,
    fetch: PropTypes.func,
    component: PropTypes.shape({
      content: PropTypes.element.isRequired,
      buble: PropTypes.bool
    }),
    options: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      value: PropTypes.number.isRequired,
      goTo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    })),
    goTo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    validator: PropTypes.func,
    end: PropTypes.bool
  })).isRequired,
}

export default Container;