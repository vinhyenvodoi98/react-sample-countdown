import React from 'react'
import styles from './styles.module.css'
import Clock from './components/Clock'

export const ExampleComponent = ({ text, time, onFinish }) => {
  return (
    <div className={styles.test}>
      <Clock text={text} time={time} onFinish={onFinish} />
    </div>
  )
}
