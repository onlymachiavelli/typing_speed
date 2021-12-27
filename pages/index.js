import React, { useState, useEffect } from 'react'
import Head from 'next/head'

const Words = ["hello", "mother", "fucker", "idiot", "cock", "dick", "pussy", "bitch"]

const useWords = () => {


}

const useGenWords = (a) => {
  const [word, setWords] = useState("")

  useEffect(() => {
    for (let i = 0; i < 10; i++) setWords(word + Words[Math.floor(Math.random() * Words.length - 1)])
  }, [word])
  return { setWords, word }

}


const App = () => {
  const [val, setVal] = useState("")

  return (
    <div>
      <div>words</div>
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