import './App.css'
import { useEffect, useState, useRef } from 'react'

function useGame(startingTime = 10) {
  const [wordCountText, setwordCountText] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [text, setText] = useState("")
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
      // @ts-ignore
      inputRef.current.focus()
      setTimeRemaining(startingTime)
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

  return {inputRef, handleChange, text, isRunning, timeRemaining, startGame, wordCountText}
}

export default useGame
