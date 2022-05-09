# React Best Chatbot 🚀

<p>Build and customize a chatbot for exactly what you need 🔥<p>
  
### Usage

Simple and easy to get started, free of dependencies.

```js
import React from 'react';
import Chatbot from 'react-best-chatbot';
  
const steps = [
  {
    id: 1,
    content: "Hello, human!",
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
  
### Examples and properties
  
Click [here](https://lucas-fernando.vercel.app/react-best-chatbot) to access the documentation.

### Info

Every user response is also accompanied by the time it took the user to interact in the chat, in milliseconds.

```js
answers = {
  values: {
    'first_step: 'Bye'
  },
  timeInMs: {
    'first_step': 2000
  } 
};
```

## Donate

If you liked, you can donate to support it :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=A2PGCFBMK59NL)
