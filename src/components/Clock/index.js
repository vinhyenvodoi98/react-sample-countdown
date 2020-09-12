import React, { useState, useEffect, initialState } from 'react'
import clockImg from '/../../asset/clock-icon.png'

import styles from './index.module.css'

export default function Clock({ text, time, onFinish }) {
  const [seconds, setSeconds] = useState(initialState)
  const [timer, setTimer] = useState(initialState)

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24

  useEffect(() => {
    const main = () => {
      if (time) {
        var temp = time.split(':')
        if (
          parseInt(temp[0]) < 0 ||
          parseInt(temp[0] > 24) ||
          parseInt(temp[1]) < 0 ||
          parseInt(temp[1] > 60) ||
          parseInt(temp[2]) < 0 ||
          parseInt(temp[2] > 60)
        )
          setSeconds(-5)
        else {
          setSeconds(
            parseInt(temp[0] * 3600) +
              parseInt(temp[1] * 60) +
              parseInt(temp[2])
          )
        }
      } else setSeconds(-5)
    }
    main()
  }, [time])

  useEffect(() => {
    const main = () => {
      if (seconds === undefined || seconds <= 0) {
        if (seconds <= 0)
          setTimeout(() => {
            onFinish()
          }, 1)
        clearInterval(timer)
      } else {
        let interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1)
        }, 1000)
        setTimer(interval)
        clearInterval(timer)
      }
    }

    main()
  }, [seconds])

  return (
    <div>
      {seconds === -5 ? (
        console.error('Incorrect time format entered.')
      ) : (
        <div>
          <div className={styles.clock_box}>
            <h1>{text}</h1>
            <img className={styles.clock} src={clockImg} alt='alt' />
          </div>

          <p>{seconds} seconds have elapsed since mounting.</p>
        </div>
      )}
    </div>
  )
}
