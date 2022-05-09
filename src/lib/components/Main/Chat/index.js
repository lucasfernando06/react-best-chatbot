import React, { useState, useEffect } from "react";

import Chat from "./components/Chat";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import ChatText from "./components/ChatText";
import ChatHeaderBox from "./components/ChatHeaderBox";
import ChatInput from "./components/ChatInput";
import CloseIcon from "./components/CloseIcon";
import SendIcon from "./components/SendIcon";
import IconsBox from "./components/IconsBox";
import RefreshIcon from "./components/RefreshIcon";
import ErrorMessage from "./components/ErrorMessage";
import EndMessage from "./components/EndMessage";

import Message from "../Message";

const Bot = ({ handleResetChat, toggleOpen, options, steps }) => {
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
    closeComponent,
  } = options;

  const initial = steps ? steps[0] : null;

  const [value, setValue] = useState("");
  const [actualStep, setActualStep] = useState({ ...initial });

  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [end, setEnd] = useState(false);

  const [answers, setAnswers] = useState({
    values: {},
    timeInMs: {},
  });

  const [startTime, setStartTime] = useState(new Date());
  const [messages, setMessages] = useState([]);

  const delay = (customDelay) => {
    return customDelay ? customDelay : messageDelay;
  };

  const calculateTimeMs = () => {
    const endTime = new Date();
    const timeDiff = endTime - startTime;

    setStartTime(new Date());
    return timeDiff;
  };

  useEffect(() => {
    if (actualStep) handleNewMessage(actualStep);
  }, [actualStep]);

  useEffect(() => {
    if (actualStep && actualStep.end) {
      setTimeout(() => {
        setEnd(true);
        endingCallback(answers, toggleOpen, handleResetChat);
      }, delay(actualStep.delay));
    }
  }, [messages]);

  const handleChange = (value) => {
    setValue(value);
  };

  const handleNewMessage = (newMessage) => {
    const newArray = Object.assign([], messages);
    newArray.push(newMessage);

    setMessages(newArray);
  };

  const handleAnswer = (option = null) => {
    setIsDisabled(true);

    const newValue = option ? option : value;

    const newMessage = {
      isUser: true,
      content: option ? newValue.content : newValue,
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

    const newAnswers = Object.assign(
      {},
      {
        values: Object.assign({}, answers.values, {
          [actualStep && actualStep.id]: option
            ? {
                content: newValue.content,
                value: newValue.value,
              }
            : newValue,
        }),
        timeInMs: Object.assign({}, answers.timeInMs, {
          [actualStep && actualStep.id]: calculateTimeMs(),
        }),
      }
    );
    handleChange("");

    setAnswers(newAnswers);
    handleNewMessage(newMessage);

    triggerNext(option ? option.goTo : actualStep && actualStep.goTo);
    sendingMessageCallback(newAnswers, toggleOpen);
  };

  const triggerNext = (goTo = null) => {
    const target = goTo ? goTo : actualStep && actualStep.goTo;

    setTimeout(() => {
      const nextStep = steps && steps.find((x) => x.id === target);
      if (nextStep) setActualStep(nextStep);
    }, messageDelay);
  };

  const lastMessageIsBot = (index) => {
    const lastMessage = messages[index - 1];
    return !lastMessage ? false : !lastMessage.isUser;
  };

  const renderMessage = (key, message, index) => (
    <Message
      key={key}
      message={Object.assign({}, message, {
        src: !message.isUser
          ? !lastMessageIsBot(index)
            ? botAvatarSrc
            : null
          : null,
        delay: delay(message.delay),
      })}
      loadingComponent={loadingComponent}
      answers={answers}
      handleAnswer={handleAnswer}
      triggerNext={triggerNext}
      setIsDisabled={setIsDisabled}
    />
  );

  const disableSend = () => {
    return isDisabled || !value || value === "";
  };

  return (
    <Chat>
      <ChatHeader>
        <ChatHeaderBox>
          <ChatText>{header}</ChatText>
        </ChatHeaderBox>
        <IconsBox>
          <RefreshIcon onClick={handleResetChat}>
            {refreshComponent}
          </RefreshIcon>
          <CloseIcon onClick={toggleOpen}>{closeComponent}</CloseIcon>
        </IconsBox>
      </ChatHeader>
      <ChatBody id="rbc-chat-body">
        {messages &&
          messages.length > 0 &&
          messages.map((message, index) =>
            renderMessage(`KEY-${message.id}-${index}`, message, index)
          )}
      </ChatBody>
      {(!isDisabled || error || end) && (
        <ChatFooter error={error}>
          {end ? (
            <EndMessage>{endContent}</EndMessage>
          ) : !error ? (
            <>
              <ChatInput
                autoFocus
                value={value}
                onKeyDown={(e) =>
                  e.key === "Enter" && (!disableSend() ? handleAnswer() : {})
                }
                onChange={(e) => handleChange(e.target.value)}
                disabled={isDisabled}
                placeholder={inputPlaceholder}
              />
              <div onClick={() => (!disableSend() ? handleAnswer() : {})}>
                <SendIcon disabled={disableSend()}>
                  {sendComponentFunction(disableSend())}
                </SendIcon>
              </div>
            </>
          ) : (
            <ErrorMessage>{error}</ErrorMessage>
          )}
        </ChatFooter>
      )}
    </Chat>
  );
};

export default Bot;
