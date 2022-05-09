import React from "react";
import { useEffect, useState } from "react";

import Chat from "./Chat";
import Button from "./Button";

const Bot = ({ options, theme, steps }) => {
  const {
    open: visible,
    hidden,
    openingCallback,
    closingCallback,
    chatButtonComponent,
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
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return hidden ? (
    <></>
  ) : (
    <>
      <div
        className={
          open ? "react-best-chatbot-visible" : "react-best-chatbot-hidden"
        }
      >
        {init && (
          <Chat
            key={key}
            theme={theme}
            options={options}
            steps={steps}
            handleResetChat={handleResetChat}
            toggleOpen={toggleOpen}
          />
        )}
      </div>
      <div
        className={
          !open ? "react-best-chatbot-visible" : "react-best-chatbot-hidden"
        }
        onClick={toggleOpen}
      >
        <Button
          toggleOpen={toggleOpen}
          chatButtonComponent={chatButtonComponent}
        />
      </div>
    </>
  );
};

export default Bot;
