import React from 'react'

import { ExampleComponent } from 'react-sample-countdown'
import 'react-sample-countdown/dist/index.css'

const App = () => {
  const onFinish = () => {
    // console.log('finished!')
    alert('Finished !!!')
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
