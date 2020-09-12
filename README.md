# react-sample-countdown

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-sample-countdown.svg)](https://www.npmjs.com/package/react-sample-countdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-sample-countdown

OR

yarn add react-sample-countdown
```

## Demo

![demo](https://media.giphy.com/media/LRx3K5wJeFpip7f03r/giphy.gif)

## Usage

```jsx
import React from 'react'

import { ExampleComponent } from 'react-sample-countdown'
import 'react-sample-countdown/dist/index.css'

const App = () => {
  const onFinish = () => {
    console.log('finished!')
  }

  return (
    <ExampleComponent
      text='Countdown to answer the question'
      time='00:00:15'
      onFinish={onFinish}
    />
  )
}

export default App
```

## License

MIT © [vinhyenvodoi98](https://github.com/vinhyenvodoi98)
