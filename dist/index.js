'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const ThemeContext = /*#__PURE__*/React.createContext({});
const ThemeProvider = ({
  children,
  theme
}) => {
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: {
      theme
    }
  }, children);
};

const Wrapper = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", rest, children);
};

const useTheme = () => React.useContext(ThemeContext);

const Container$m = ({
  children,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-chat",
    style: theme.containerStyle
  }, rest), children);
};

const Container$l = ({
  children,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-chat-header",
    style: {
      background: theme.primaryColor
    }
  }, rest), children);
};

const Container$k = ({
  children,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-chat-body",
    style: {
      background: theme.background
    }
  }, rest), children);
};

const Container$j = ({
  children,
  error,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-chat-footer",
    style: {
      background: error ? "#F05F41" : "#fff"
    }
  }, rest), children);
};

const Container$i = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-chat-text"
  }, rest), children);
};

const Container$h = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-chat-header-box"
  }, rest), children);
};

const Container$g = ({ ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement("input", _extends({
    className: "rbc-chat-input"
  }, rest));
};

const Container$f = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    className: "rbc-close-icon"
  }, rest), children);
};

const Container$e = ({
  disabled,
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    className: "rbc-send-icon",
    style: {
      cursor: !disabled ? "pointer" : "inherit"
    }
  }, rest), children);
};

const Container$d = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-icons-box"
  }, rest), children);
};

const Container$c = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    className: "rbc-refresh-icon"
  }, rest), children);
};

const Container$b = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-error-message"
  }, rest), children);
};

const Container$a = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-end-message"
  }, rest), children);
};

const Container$9 = ({
  children,
  isUser,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-message-container",
    style: {
      alignItems: isUser ? "flex-end" : "flex-start"
    }
  }, rest), children);
};

const Container$8 = ({
  children,
  isUser,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  const {
    primaryColor,
    secondaryColor,
    textPrimaryColor,
    textSecondaryColor
  } = theme;
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-message",
    style: {
      background: !isUser ? primaryColor : secondaryColor,
      borderTopLeftRadius: isUser ? "20px" : "0px",
      borderTopRightRadius: isUser ? "0px" : "20px",
      color: isUser ? textSecondaryColor : textPrimaryColor
    }
  }, rest), children);
};

const Container$7 = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement("img", _extends({
    alt: "Avatar",
    className: "rbc-message-avatar"
  }, rest), children);
};

const Container$6 = ({
  marginLeft,
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    style: {
      marginLeft
    }
  }, rest), children);
};

const Container$5 = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-message-options-container"
  }, rest), children);
};

const Container$4 = ({
  children,
  newStyle,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-message-options-option",
    style: {
      background: theme.secondaryColor,
      color: theme.textSecondaryColor
    }
  }, rest), children);
};

const Container$3 = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-message-show-message"
  }, rest), children);
};

const Container$2 = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-message-custom-container"
  }, rest), children);
};

const scrollBottom = () => {
  const element = document.getElementById("rbc-chat-body");

  if (element) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth"
    });
  }
};

const MessageContainer = ({
  message,
  answers,
  setIsDisabled,
  handleAnswer,
  triggerNext,
  loadingComponent
}) => {
  const {
    src,
    isUser,
    content,
    component,
    receiveInput,
    delay,
    options,
    fetch
  } = message;
  const [showing, setShowing] = React.useState(isUser);
  const [disableOptions, setDisableOptions] = React.useState(false);
  const [fetchResult, setFetchResult] = React.useState({});
  const {
    content: CustomComponent,
    bubble = true
  } = component || {};

  const fetchApi = async () => {
    try {
      const result = await fetch();
      setFetchResult(result);
    } catch (err) {
      console.error(err);
    }
  };

  const configureFlow = () => {
    setShowing(true);

    if (receiveInput || options) {
      if (!options) setIsDisabled(false);
    } else triggerNext();

    scrollBottom();
  };

  React.useEffect(() => {
    const sync = async () => {
      if (!showing) {
        if (fetch) {
          await fetchApi();
          configureFlow();
        } else {
          setTimeout(() => {
            configureFlow();
          }, delay);
        }
      }

      scrollBottom();
    };

    sync();
  });

  const callHandleAnswer = option => {
    handleAnswer(option);
    setDisableOptions(true);
  };

  const renderCustomComponent = () => /*#__PURE__*/React__default["default"].createElement(CustomComponent, {
    answers: answers,
    fetchResult: fetchResult
  });

  return /*#__PURE__*/React__default["default"].createElement(Container$9, {
    isUser: isUser
  }, !showing ? /*#__PURE__*/React__default["default"].createElement(Container$6, {
    marginLeft: !src ? 50 : 0
  }, loadingComponent) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Container$3, null, src ? /*#__PURE__*/React__default["default"].createElement(Container$7, {
    alt: "Bot Avatar",
    src: src
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      marginLeft: 50
    }
  }), bubble ? (content || CustomComponent) && /*#__PURE__*/React__default["default"].createElement(Container$8, {
    isUser: isUser
  }, content, CustomComponent && renderCustomComponent()) : CustomComponent && /*#__PURE__*/React__default["default"].createElement(Container$2, null, renderCustomComponent())), options && !disableOptions && /*#__PURE__*/React__default["default"].createElement(Container$5, null, options.map(option => /*#__PURE__*/React__default["default"].createElement(Container$4, {
    key: option.value,
    onClick: () => callHandleAnswer(option)
  }, option.content)))));
};

var Message = /*#__PURE__*/React.memo(MessageContainer);

const Bot$1 = ({
  handleResetChat,
  toggleOpen,
  options,
  steps
}) => {
  const {
    header,
    botAvatarSrc,
    inputPlaceholder,
    endContent,
    messageDelay,
    sendingMessageCallback,
    endingCallback,
    sendComponentFunction,
    loadingComponent,
    refreshComponent,
    closeComponent
  } = options;
  const initial = steps ? steps[0] : null;
  const [value, setValue] = React.useState("");
  const [actualStep, setActualStep] = React.useState({ ...initial
  });
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [end, setEnd] = React.useState(false);
  const [answers, setAnswers] = React.useState({
    values: {},
    timeInMs: {}
  });
  const [startTime, setStartTime] = React.useState(new Date());
  const [messages, setMessages] = React.useState([]);

  const delay = customDelay => {
    return customDelay ? customDelay : messageDelay;
  };

  const calculateTimeMs = () => {
    const endTime = new Date();
    const timeDiff = endTime - startTime;
    setStartTime(new Date());
    return timeDiff;
  };

  React.useEffect(() => {
    if (actualStep) handleNewMessage(actualStep);
  }, [actualStep]);
  React.useEffect(() => {
    if (actualStep && actualStep.end) {
      setTimeout(() => {
        setEnd(true);
        endingCallback(answers, toggleOpen, handleResetChat);
      }, delay(actualStep.delay));
    }
  }, [messages]);

  const handleChange = value => {
    setValue(value);
  };

  const handleNewMessage = newMessage => {
    const newArray = Object.assign([], messages);
    newArray.push(newMessage);
    setMessages(newArray);
  };

  const handleAnswer = (option = null) => {
    setIsDisabled(true);
    const newValue = option ? option : value;
    const newMessage = {
      isUser: true,
      content: option ? newValue.content : newValue
    };

    if (actualStep && actualStep.validator && !option) {
      const error = actualStep.validator(value);

      if (error) {
        setError(error);
        setTimeout(() => {
          setIsDisabled(false);
          setError(null);
        }, 2000);
        return;
      }
    }

    const newAnswers = Object.assign({}, {
      values: Object.assign({}, answers.values, {
        [actualStep && actualStep.id]: option ? {
          content: newValue.content,
          value: newValue.value
        } : newValue
      }),
      timeInMs: Object.assign({}, answers.timeInMs, {
        [actualStep && actualStep.id]: calculateTimeMs()
      })
    });
    handleChange("");
    setAnswers(newAnswers);
    handleNewMessage(newMessage);
    triggerNext(option ? option.goTo : actualStep && actualStep.goTo);
    sendingMessageCallback(newAnswers, toggleOpen);
  };

  const triggerNext = (goTo = null) => {
    const target = goTo ? goTo : actualStep && actualStep.goTo;
    const nextStep = steps && steps.find(x => x.id === target);
    if (nextStep) setActualStep(nextStep);
  };

  const lastMessageIsBot = index => {
    const lastMessage = messages[index - 1];
    return !lastMessage ? false : !lastMessage.isUser;
  };

  const renderMessage = (key, message, index) => /*#__PURE__*/React__default["default"].createElement(Message, {
    key: key,
    message: Object.assign({}, message, {
      src: !message.isUser ? !lastMessageIsBot(index) ? botAvatarSrc : null : null,
      delay: delay(message.delay)
    }),
    loadingComponent: loadingComponent,
    answers: answers,
    handleAnswer: handleAnswer,
    triggerNext: triggerNext,
    setIsDisabled: setIsDisabled
  });

  const disableSend = () => {
    return isDisabled || !value || value === "";
  };

  return /*#__PURE__*/React__default["default"].createElement(Container$m, null, /*#__PURE__*/React__default["default"].createElement(Container$l, null, /*#__PURE__*/React__default["default"].createElement(Container$h, null, /*#__PURE__*/React__default["default"].createElement(Container$i, null, header)), /*#__PURE__*/React__default["default"].createElement(Container$d, null, /*#__PURE__*/React__default["default"].createElement(Container$c, {
    onClick: handleResetChat
  }, refreshComponent), /*#__PURE__*/React__default["default"].createElement(Container$f, {
    onClick: toggleOpen
  }, closeComponent))), /*#__PURE__*/React__default["default"].createElement(Container$k, {
    id: "rbc-chat-body"
  }, messages && messages.length > 0 && messages.map((message, index) => renderMessage(`KEY-${message.id}-${index}`, message, index))), (!isDisabled || error || end) && /*#__PURE__*/React__default["default"].createElement(Container$j, {
    error: error
  }, end ? /*#__PURE__*/React__default["default"].createElement(Container$a, null, endContent) : !error ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Container$g, {
    autoFocus: true,
    value: value,
    onKeyDown: e => e.key === "Enter" && (!disableSend() ? handleAnswer() : {}),
    onChange: e => handleChange(e.target.value),
    disabled: isDisabled,
    placeholder: inputPlaceholder
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: () => !disableSend() ? handleAnswer() : {}
  }, /*#__PURE__*/React__default["default"].createElement(Container$e, {
    disabled: disableSend()
  }, sendComponentFunction(disableSend())))) : /*#__PURE__*/React__default["default"].createElement(Container$b, null, error)));
};

const Container$1 = ({
  children,
  theme,
  chatStyle,
  ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-btn-chat",
    style: { ...chatStyle,
      background: theme.primaryColor
    }
  }, rest), children);
};

const Container = ({ ...rest
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, _extends({
    className: "rbc-btn-chat-icon"
  }, rest), "\uD83D\uDCAC");
};

const IconContainer = ({
  chatButtonComponent
}) => {
  const {
    theme
  } = useTheme();
  const {
    containerStyle
  } = theme;
  const chatStyle = { ...containerStyle,
    width: 50,
    height: 50
  };
  const propsStyle = { ...containerStyle,
    width: "auto"
  };
  return chatButtonComponent ? /*#__PURE__*/React__default["default"].createElement("div", {
    style: propsStyle
  }, chatButtonComponent) : /*#__PURE__*/React__default["default"].createElement(Container$1, {
    theme: theme,
    chatStyle: chatStyle
  }, /*#__PURE__*/React__default["default"].createElement(Container, null, chatButtonComponent));
};

const Bot = ({
  options,
  theme,
  steps
}) => {
  const {
    open: visible,
    hidden,
    openingCallback,
    closingCallback,
    chatButtonComponent,
    openInSeconds
  } = options;
  const [key, setKey] = React.useState(1);
  const [init, setInit] = React.useState(visible);
  const [open, setOpen] = React.useState(visible);
  React.useEffect(() => {
    if (!open && openInSeconds) {
      setTimeout(() => {
        setOpen(true);
      }, 1000 * openInSeconds);
    }
  }, []);
  React.useEffect(() => {
    if (open) {
      openingCallback();
      if (!init) setInit(true);
    } else if (init) closingCallback();
  }, [open]);

  const handleResetChat = () => {
    setKey(key + 1);
  };

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  return hidden ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: open ? "react-best-chatbot-visible" : "react-best-chatbot-hidden"
  }, init && /*#__PURE__*/React__default["default"].createElement(Bot$1, {
    key: key,
    theme: theme,
    options: options,
    steps: steps,
    handleResetChat: handleResetChat,
    toggleOpen: toggleOpen
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: !open ? "react-best-chatbot-visible" : "react-best-chatbot-hidden",
    onClick: toggleOpen
  }, /*#__PURE__*/React__default["default"].createElement(IconContainer, {
    toggleOpen: toggleOpen,
    chatButtonComponent: chatButtonComponent
  })));
};

var img = "data:image/png;base64,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";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*{box-sizing:border-box}.react-best-chatbot-visible{animation:fade .5s linear;display:block}.react-best-chatbot-hidden{animation:fade .5s linear;display:none}.rbc-chat{border-radius:15px;box-shadow:0 12px 24px 0 #00000040;display:flex;flex-direction:column;height:500px;transition:all .5s ease-in-out}.rbc-chat-header{align-items:center;border-top-left-radius:15px;border-top-right-radius:15px;display:flex;justify-content:space-between;padding:20px;width:100%}.rbc-chat-body{background-position:50%;background-size:cover;border-top:1px solid #eee;flex-grow:1;overflow-y:scroll;padding:20px;width:100%}.rbc-chat-body::-webkit-scrollbar{width:6px}.rbc-chat-body::-webkit-scrollbar-track{margin:5px}.rbc-chat-body::-webkit-scrollbar-thumb{background:#999;border-radius:5px}.rbc-chat-body::-webkit-scrollbar-thumb:hover{background:#d0d0d0}.rbc-chat-footer{align-items:center;border-bottom-left-radius:15px;border-bottom-right-radius:15px;display:flex;height:70px;justify-content:space-between;padding:20px;width:100%}.rbc-chat-text{font-size:20px;font-weight:700}.rbc-chat-header-box{align-items:center;display:flex;text-align:left}.rbc-icons-box{display:flex;margin-left:10px}.rbc-error-message{color:#fff}.rbc-end-message,.rbc-error-message{align-items:center;display:flex;justify-content:center;width:100%}.rbc-end-message{color:#757575}.rbc-chat-input{background:#fff;border:none;flex-grow:1;font-size:16px;width:100%}.rbc-chat-input:focus{box-shadow:none;outline:none}.rbc-close-icon{cursor:pointer;height:15px;margin-left:10px}.rbc-send-icon{margin-left:20px}.rbc-refresh-icon{cursor:pointer;height:20px}.rbc-close-icon:hover,.rbc-refresh-icon:hover{opacity:.8}@media (max-width:350px){.rbc-chat{max-width:280px!important}}@keyframes fade{0%{opacity:0}to{opacity:1}}.rbc-btn-chat{align-items:center;border-radius:100%;box-shadow:0 12px 24px 0 #00000040;cursor:pointer;display:flex;height:50px;justify-content:center;width:50px}.rbc-message-container{display:flex;flex-direction:column;width:100%}.rbc-message-avatar{border-radius:100%;box-shadow:0 12px 24px 0 #00000026;height:40px;margin-right:15px;width:40px}.rbc-message{align-items:center;border-radius:20px;box-shadow:0 12px 24px 0 #0000001a;display:flex;margin-bottom:10px;max-width:170px;padding:12px}.rbc-message-options-container{animation:fade .5s linear;display:flex;flex-wrap:wrap;margin-bottom:10px;margin-left:50px}.rbc-message-options-option{align-items:center;border-radius:20px;cursor:pointer;display:flex;justify-content:center;margin-right:10px;margin-top:10px;padding:12px;transition:all .2s ease-in-out}.rbc-message-options-option:hover{opacity:.8}.rbc-message-show-message{animation:fade .5s linear;display:flex}.rbc-message-custom-container{margin-bottom:10px}";
styleInject(css_248z);

const defaultTheme = {
  primaryColor: "#484a49",
  secondaryColor: "#D53634",
  textPrimaryColor: "#FFFFFF",
  textSecondaryColor: "#FFFFFF",
  background: "#F0F0F0",
  containerStyle: {
    width: 330,
    position: "fixed",
    bottom: 20,
    right: 20
  }
};
const defaultOptions = {
  header: /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: "#FFFFFF"
    }
  }, "Bot"),
  inputPlaceholder: "Type in your message...",
  endContent: "End...",
  botAvatarSrc: img,
  messageDelay: 500,
  sendComponentFunction: () => "🟢",
  loadingComponent: "Loading...",
  refreshComponent: "🔵",
  closeComponent: "🔴",
  openingCallback: () => {},
  closingCallback: () => {},
  endingCallback: () => {},
  sendingMessageCallback: () => {}
};

const ChatBot = ({
  theme: themeProps = {},
  options: optionsProps = {},
  steps
}) => {
  const theme = Object.assign({}, defaultTheme, themeProps);
  const options = Object.assign({}, defaultOptions, optionsProps);
  const componentProps = {
    options,
    steps
  };
  return /*#__PURE__*/React__default["default"].createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(Bot, _extends({
    theme: theme
  }, componentProps)));
};

module.exports = ChatBot;
//# sourceMappingURL=index.js.map
