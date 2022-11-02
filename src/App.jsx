import './App.css'
import React from 'react'
import useGame from './useGame'

function App() {
  const {
    inputRef, 
    handleChange, 
    text, 
    isRunning, 
    timeRemaining, 
    startGame, 
    wordCountText
  } = useGame(10)

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
