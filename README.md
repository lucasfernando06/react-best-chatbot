# React Best Chatbot 🚀

<p>Build and customize an chatbot for exactly what you need 🔥<p>
  
<img src="https://www.dropbox.com/s/x3ks5g6my6y83xu/react-chatbot.gif?raw=1" height="400" />
  
### Usage

Simple and easy to get started. You'll need to install Styled Components to use.

```js
import React from 'react';
import Chatbot from 'react-best-chatbot';
  
const steps = [
  {
    id: 1,
    content: "Hello, world!",
    goTo: 2
  }, 
  {
    id: 2,
    content: "See ya...",
    end: true
  }
];

const App = () => (
  <Chatbot steps={steps} />
);

export default App;
```
  
### Style props
  
| Name                    | Type       | Default Value                                     | Required? | Description                               |
| ----------------------- | ---------- | ------------------------------------------------- | --------- | ----------------------------------------  |
| `primaryColor`          | `string`   | `#4C5270`                                         | No        | Chat primary color.                       |     
| `secondaryColor`        | `string`   | `#F652A0`                                         | No        | Chat secondary color.                     |  
| `textColor`             | `string`   | `#fff`                                            | No        | Chat text color.                          |
| `background`            | `string`   | `Custom background`                               | No        | Chat background.                          |
| `positionStyles`        | `Object`   | `{ position: 'fixed', bottom: 20px, right: 20px}` | No        | Position of the chat (button and window). | 
| `width`                 | `number`   | `330`                                             | No        | Chat width                                |   
  
### Steps props
  
| Name                    | Type                            | Default Value | Required? | Description                                                   | 
| ----------------------- | ------------------------------- | ------------- | --------- | ------------------------------------------------------------  | 
| `id`                    | `string / number`               | `undefined`   | Yes       | Step Id.                                                      |
| `content`               | `string / Element`              | `undefined`   | No        | Content displayed in the message bubble.                      |
| `receiveInput`          | `Boolean`                       | `false`       | No        | Decide if the user has to type an answer.                     |
| `delay`                 | `number`                        | `undefined`   | No        | Delay of the step message.                                    |
| `component`             | `Object`                        | `undefined`   | No        | Custom component for the message.                             |
| `fetch`                 | `Function`                      | `undefined`   | No        | Asynchronous API call that returns props to custom component. |
| `options`               | `Array`                         | `undefined`   | No        | Options for user interaction.                                 |
| `goTo`                  | `string / number`               | `undefined`   | No        | Trigger for the next step (id).                               |
| `end`                   | `Boolean`                       | `false`       | No        | Indicates it is the last step.                                |
| `validator`             | `Function`                      | `undefined`   | No        | Validate an answer (return the message error or null)         |
  
### Options props

| Name                     | Type                            | Default Value             | Required? | Description                                        |
| ------------------------ | ------------------------------- | ------------------------- | --------- | -------------------------------------------------- |
| `useExample`             | `Boolean`                       | `false`                   | No        | Alias to real example (override options and steps) |  
| `header`                 | `string / Element`              | `undefined`               | No        | Chat header.                                       |   
| `sendMessage`            | `string`                        | `Type in your message...` | No        | Custom send message.                               |  
| `endContent`             | `string / Element`              | `End...`                  | No        | Custom end conversation component.                 |
| `botAvatarSrc`           | `string`                        | `Custom src`              | No        | Bot Src Image.                                     |
| `open`                   | `Boolean`                       | `false`                   | No        | Chat open.                                         |     
| `openInSeconds`          | `number`                        | `2`                       | No        | Chat open after seconds.                           |   
| `hidden`                 | `Boolean`                       | `false`                   | No        | Chat hidden.                                       |   
| `messageDelay`           | `number`                        | `1000`                    | No        | Message delay.                                     |
| `buttonComponent`        | `Element`                       | `Custom button`           | No        | Custom button component.                           |    
| `loadingComponent`       | `Element`                       | `Custom loading`          | No        | Custom loading.                                    |   
| `sendComponent`          | `Element`                       | `Custom icon`             | No        | Custom send icon.                                  |    
| `openingCallback`        | `Function`                      | `undefined`               | No        | Opening callback.                                  |
| `closingCallback`        | `Function`                      | `undefined`               | No        | Closing callback.                                  |
| `endingCallback`         | `Function(answers, toggleOpen, refresh)` | `undefined`      | No        | Ending callback.                                   |       
| `sendingMessageCallback` | `Function(answers, toggleOpen)` | `undefined`               | No        | Callback for user sending message.                 |    
                                                                        
### Check proptypes

```js
{
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
```

### Info

Every human response is also accompanied by the time it took the user to interact in the chat, in milliseconds.

```js
answers = {
  values: {
    'first: 'Bye'
  },
  timeInMs: {
    'first': 2000
  } 
};
```

## Donate

If you liked, you can donate to support it :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=A2PGCFBMK59NL)