import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './../styles/Home.module.css'
const Words = ["hello", "mother", "fucker", "idiot", "cock", "dick", "pussy", "bitch"]

const useWords = () => {


}

const useGenWords = (a) => {
  const [word, setWords] = useState("")

  useEffect(() => {
    setWords(word + Words[Math.floor(Math.random() * Words.length)] + " ")
  }, [word])
  return { setWords, word }

}


const App = () => {
  const [val, setVal] = useState("")
  const { word, setWords } = useGenWords()
  return (
    <div>
      <div className={styles.word}>{word}</div>
      <input type="text" value={val}
        onChange={(e) =>
          setVal(e.target.value)
        }
      />

      <p></p>
    </div>
  )
}

export default App