// @ts-nocheck
import './App.css'
import React, { useEffect, useState, useRef } from 'react'

function App() {
  const STARTING_TIME = 10
  const [text, setText] = useState("")
  const [wordCountText, setwordCountText] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const inputRef = useRef(null)
  
  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTimeRemaining => prevTimeRemaining - 1))
      }, 1000)
    } else if (timeRemaining === 0){
      endGame()
    }
  },[timeRemaining])

  function handleChange(event){
    setText(event.target.value)
  }

  async function startGame(){
    if (!isRunning) {
      await setIsRunning(true)
      setText("")
      inputRef.current.focus()
      setTimeRemaining(STARTING_TIME)
    }
  }

  function endGame(){
    showWordCount()
    setIsRunning(false)
  }

  async function showWordCount(){
    const amountOfWords = await calculateWordCount()
    setwordCountText(`Word count: ${amountOfWords}`)
  }

  function calculateWordCount(){
    if(text.length > 0) {
      const wordsArray = text.trim().split(" ")
      return wordsArray.length
    }
    return 0
  }

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea 
        ref={inputRef}
        disabled={!isRunning}
        name='text'
        onChange={handleChange}
        placeholder="Type your text here"
        value={text}
      />
      <h4>Time remaining: {timeRemaining}s</h4>
      <button onClick={startGame}>Start</button>
      <h2 id="wordCount">{wordCountText}</h2>
    </>
  )
}

export default App
