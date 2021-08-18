import React from 'react';
import BotAvatar from '../../assets/bot.png';

export const defaultOptions = {
  header: <span>🢅 API bot</span>,
  sendMessage: 'Type in your message...',
  endContent: (
    <div style={{ textAlign: 'center' }}>
      Thank you for using <span style={{ color: '#F652A0' }}>❤</span>
      <div style={{ fontSize: 12, marginTop: 5 }}>
        © 2021 <strong>Lucas Fernando</strong>.  All rights reserved.
      </div>
    </div>
  ),
  botAvatarSrc: BotAvatar,
  open: false,
  hidden: false,
  messageDelay: 1000,
  openingCallback: () => { },
  closingCallback: () => { },
  endingCallback: (answers, toggleOpen, refresh) => {
    if (answers.values['redirectUser']?.value === 2) {
      setTimeout(() => {
        toggleOpen();
        refresh();
      }, 2000);
    } else {
      setTimeout(() => {
        toggleOpen();
        refresh();

        window.open(
          "https://github.com/lucasfernando06/react-powerful-chatbot", "_blank");

      }, 5000);
    }

  },
  sendingMessageCallback: () => { },
}

export const defaultSteps = [
  {
    id: 'redirectUser',
    content: <span>Welcome, human! Want to learn about my <strong>"props"</strong>?</span>,
    options: [
      {
        content: <div>🤓 Yes</div>,
        value: 1,
        goTo: 2
      },
      {
        content: <div>😐 No</div>,
        value: 2,
        goTo: 3
      },
    ]
  },
  {
    id: 2,
    content: <div>Ok... You're going to be redirected in 5 seconds! See ya!</div>,
    end: true
  },
  {
    id: 3,
    content: <div>Hummm...</div>,
    goTo: 4,
  },
  {
    id: 4,
    content: <div>Ok, See ya!</div>,
    end: true
  }
];

export default {
  defaultOptions,
  defaultSteps
}