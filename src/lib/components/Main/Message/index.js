import React, { useEffect, useState } from 'react';
import {
  Container,
  Message,
  MessageAvatar,
  Loading,
  OptionsContainer,
  Option,
  ShowMessage,
  CustomComponentContainer,
  CustomLoadingContainer
} from './styles';
import scrollToBottom from '../../../utils/scrollToBottom';

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
  }

  const configureFlow = () => {
    setShowing(true);

    if (receiveInput || options) {
      if (!options) setIsDisabled(false);
    } else triggerNext();

    scrollToBottom();
  }

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

      scrollToBottom();
    }

    sync();
  });

  const callHandleAnswer = (option) => {
    handleAnswer(option);
    setDisableOptions(true);
  };

  const renderCustomComponent = () => (<CustomComponent answers={answers} fetchResult={fetchResult} />)

  return (
    <Container isUser={isUser}>
      {
        !showing ?
          (
            loadingComponent ?
              <CustomLoadingContainer marginLeft={!src ? 50 : 0}>
                {loadingComponent}
              </CustomLoadingContainer>
              :
              <Loading marginLeft={!src ? 70 : 20} />
          )
          :
          <>
            <ShowMessage className='lf-show-message'>
              {
                src ? <MessageAvatar alt='Bot Avatar' src={src} />
                  :
                  <div style={{ marginLeft: 50 }}></div>
              }
              {
                bubble ?
                  (content || CustomComponent) &&
                  <Message isUser={isUser}>
                    {content}
                    {CustomComponent && renderCustomComponent()}
                  </Message>
                  :
                  CustomComponent &&
                  <CustomComponentContainer>
                    {renderCustomComponent()}
                  </CustomComponentContainer>
              }
            </ShowMessage>
            {
              options && !disableOptions &&
              <OptionsContainer className='lf-show-message'>
                {
                  options.map((option) => (
                    <Option key={option.value} onClick={() => callHandleAnswer(option)}>
                      {option.content}
                    </Option>
                  ))
                }
              </OptionsContainer>
            }
          </>
      }
    </Container>
  )
}

export default MessageContainer;