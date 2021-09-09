import React, { useState, useEffect } from 'react';

import {
  Chat,
  ChatHeader,
  ChatBody,
  ChatFooter,
  ChatText,
  ChatHeaderBox,
  ChatInput,
  CloseIcon,
  SendIcon,
  IconsBox,
  RefreshIcon,
  ErrorMessage,
  EndMessage,
} from './styles';
import Message from '../Message';

const Bot = ({
  handleResetChat,
  toggleOpen,
  options,
  style,
  steps
}) => {

  const {
    header,
    botAvatarSrc,
    sendMessage,
    endContent,
    messageDelay,
    sendingMessageCallback,
    endingCallback,
    sendComponent,
    loadingComponent
  } = options;

  const { width, positionStyles } = style;

  const initial = steps ? steps[0] : {};

  const [value, setValue] = useState('');
  const [actualStep, setActualStep] = useState(initial);

  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [end, setEnd] = useState(false);

  const [answers, setAnswers] = useState({
    values: {},
    timeInMs: {}
  });

  const [startTime, setStartTime] = useState(new Date());
  const [messages, setMessages] = useState([]);

  const delay = (customDelay) => {
    return customDelay ? customDelay : messageDelay;
  }

  const calculateTimeMs = () => {
    const endTime = new Date();
    const timeDiff = endTime - startTime;

    setStartTime(new Date());
    return timeDiff;
  }

  useEffect(() => {
    handleBotMessage(actualStep);
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
  }

  const handleBotMessage = (newMessage) => {
    setMessages(prev => [...prev, newMessage]);
  }

  const handleAnswer = (option = null) => {
    setIsDisabled(true);

    const newValue = option ? option : value;

    const newMessage = {
      isUser: true,
      content: option ? newValue.content : newValue
    };

    if (actualStep && actualStep.validator) {
      const result = actualStep.validator(value);
      if (result) {
        setError(result);
        setTimeout(() => {
          setIsDisabled(false);
          setError(null);
        }, 2000);

        return;
      }
    }

    setAnswers(Object.assign({}, {
      values: Object.assign({}, answers.values, {
        [actualStep && actualStep.id]: option ? {
          content: newValue.content,
          value: newValue.value
        } : newValue
      }),
      timeInMs: Object.assign({}, answers.timeInMs, {
        [actualStep && actualStep.id]: calculateTimeMs()
      })
    }));

    const newArray = [...messages, newMessage];

    handleChange('');
    setMessages(newArray);
    triggerNext(option ? option.goTo : (actualStep && actualStep.goTo));
    sendingMessageCallback(answers, toggleOpen);
  }

  const triggerNext = (goTo = null) => {
    const target = goTo ? goTo : (actualStep && actualStep.goTo);

    setTimeout(() => {
      const nextStep = steps && steps.find(x => x.id === target);
      if (nextStep) setActualStep(nextStep);
    }, messageDelay);
  }

  const lastIsBot = (index) => {
    const lastMessage = messages[index - 1];
    return !lastMessage ? false : !lastMessage.isUser;
  }

  const renderMessage = (message, index) => (
    <Message
      message={Object.assign({}, message, {
        src: !message.isUser ? !lastIsBot(index) ? botAvatarSrc : null : null,
        delay: delay(message.delay)
      })}
      loadingComponent={loadingComponent}
      answers={answers}
      handleAnswer={handleAnswer}
      triggerNext={triggerNext}
      setIsDisabled={setIsDisabled}
    />
  )

  const disableSend = () => {
    return isDisabled || !value || value === '';
  }

  return (
    <Chat style={positionStyles} width={width}>
      <ChatHeader>
        <ChatHeaderBox>
          <ChatText>{header}</ChatText>
        </ChatHeaderBox>
        <IconsBox>
          <RefreshIcon onClick={handleResetChat} />
          <CloseIcon onClick={toggleOpen} />
        </IconsBox>
      </ChatHeader>
      <ChatBody id='lf-chat-body'>
        {
          messages && messages.length > 0 && messages.map((message, index) => (
            <div key={message.id}>
              {renderMessage(message, index)}
            </div>
          ))
        }
      </ChatBody>
      <ChatFooter error={error}>
        {
          end ?
            <EndMessage>{endContent}</EndMessage>
            :
            !error ?
              <>
                <ChatInput
                  autoFocus
                  value={error ? error : value}
                  onKeyDown={(e) => e.key === 'Enter' && handleAnswer()}
                  onChange={(e) => handleChange(e.target.value)}
                  disabled={isDisabled}
                  placeholder={sendMessage} />
                {
                  !error && (
                    <div onClick={() => !disableSend() ? handleAnswer() : {}} >
                      {sendComponent ? sendComponent : <SendIcon disabled={disableSend()} />}
                    </div>
                  )
                }
              </>
              :
              <ErrorMessage>{error}</ErrorMessage>
        }
      </ChatFooter>
    </Chat>
  );
}

export default Bot;