import './App.css'
import React, { useState } from 'react'

function App() {
  const [text, setText] = useState("")
  
  function handleChange(event){
    setText(event.target.value)
  }
  
  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea 
        name='text'
        onChange={handleChange}
        placeholder="Type your text here"
        value={text}
      />
      <h4>Time remaining: ...</h4>
      <button>Start</button>
      <h2>Word count: ...</h2>
    </>
  )
}

export default App
