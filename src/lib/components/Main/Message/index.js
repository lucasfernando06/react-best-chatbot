import React, { useEffect, useState, memo } from "react";

import Container from "./components/Container";
import Message from "./components/Message";
import MessageAvatar from "./components/MessageAvatar";
import Loading from "./components/Loading";
import OptionsContainer from "./components/OptionsContainer";
import Option from "./components/Option";
import ShowMessage from "./components/ShowMessage";
import CustomComponentContainer from "./components/CustomComponentContainer";
import CustomLoadingContainer from "./components/CustomLoadingContainer";

import scrollBottom from "../../../utils/scrollBottom";

const MessageContainer = ({
  message,
  answers,
  setIsDisabled,
  handleAnswer,
  triggerNext,
  loadingComponent,
}) => {
  const {
    src,
    isUser,
    content,
    component,
    receiveInput,
    delay,
    options,
    fetch,
  } = message;

  const [showing, setShowing] = useState(isUser);
  const [disableOptions, setDisableOptions] = useState(false);

  const [fetchResult, setFetchResult] = useState({});

  const { content: CustomComponent, bubble = true } = component || {};

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

  useEffect(() => {
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

  const callHandleAnswer = (option) => {
    handleAnswer(option);
    setDisableOptions(true);
  };

  const renderCustomComponent = () => (
    <CustomComponent answers={answers} fetchResult={fetchResult} />
  );

  return (
    <Container isUser={isUser}>
      {!showing ? (
        <Loading marginLeft={!src ? 50 : 0}>{loadingComponent}</Loading>
      ) : (
        <>
          <ShowMessage>
            {src ? (
              <MessageAvatar alt="Bot Avatar" src={src} />
            ) : (
              <div style={{ marginLeft: 50 }}></div>
            )}
            {bubble
              ? (content || CustomComponent) && (
                  <Message isUser={isUser}>
                    {content}
                    {CustomComponent && renderCustomComponent()}
                  </Message>
                )
              : CustomComponent && (
                  <CustomComponentContainer>
                    {renderCustomComponent()}
                  </CustomComponentContainer>
                )}
          </ShowMessage>
          {options && !disableOptions && (
            <OptionsContainer>
              {options.map((option) => (
                <Option
                  key={option.value}
                  onClick={() => callHandleAnswer(option)}
                >
                  {option.content}
                </Option>
              ))}
            </OptionsContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default memo(MessageContainer);
