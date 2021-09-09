import React, { useEffect, useState } from 'react';

import Chat from './Chat';
import Button from './Button';

const Bot = ({ options, style, steps }) => {

  const {
    open: visible,
    hidden,
    openingCallback,
    closingCallback,
    buttonComponent,
    openInSeconds,
  } = options;

  const [key, setKey] = useState(1);
  const [init, setInit] = useState(visible);
  const [open, setOpen] = useState(visible);

  useEffect(() => {
    if (!open && openInSeconds) {
      setTimeout(() => {
        setOpen(true);
      }, 1000 * openInSeconds);
    }
  }, []);

  useEffect(() => {
    if (open) {
      openingCallback();
      if (!init) setInit(true);
    } else if (init) closingCallback();
  }, [open]);

  const handleResetChat = () => {
    setKey(key + 1);
  }

  const toggleOpen = () => {
    setOpen(prev => !prev);
  }

  return (
    hidden ? <></> :
      <>
        <div className={open ? 'lf-chat-visible' : 'lf-chat-hidden'}>
          {
            init &&
            <Chat
              key={key}
              style={style}
              options={options}
              steps={steps}
              handleResetChat={handleResetChat}
              toggleOpen={toggleOpen} />
          }
        </div>
        <div className={!open ? 'lf-chat-visible' : 'lf-chat-hidden'} onClick={toggleOpen}>
          {
            buttonComponent ?
              <div style={Object.assign({}, style.positionStyles)}>{buttonComponent}</div>
              :
              <Button toggleOpen={toggleOpen} style={style} />
          }
        </div>
      </>
  )
}

export default Bot;