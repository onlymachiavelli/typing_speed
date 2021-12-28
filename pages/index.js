import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './../styles/Home.module.css'

import useTimer from '../src/hooks/useTimer'

const Words = ["hello", "mother", "fucker", "idiot", "cock", "dick", "pussy", "bitch"]


const useWords = () => {


}

const useGenWords = (a) => {
  const [word, setWords] = useState("")
  const [run, setRun] = useState(false)
  useEffect(() => {
    if (run) {

      for (let i = 0; i < 10; i++)setWords(word + Words[Math.floor(Math.random() * Words.length)] + " ")

    }
  }, [word, run])
  return { setWords, word, run, setRun }

}



const App = () => {

  const { time, launch, setTime, setLaunch } = useTimer()
  const { word, setWords } = useGenWords()
  useEffect(() => {
    setLaunch(true)

  }, [])
  const [val, setVal] = useState("")


  return (
    <div>
      <div className={styles.word}>{word}</div>
      <input type="text" value={val}
        onChange={(e) =>
          setVal(e.target.value)
        }
      />

      <p>{time}</p>
    </div>
  )
}

export default App