import React, { useState } from 'react';
import './App.css';
import words from './wordlist.json'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  return (
    <div className="App">
      <h1>it works</h1>
    </div>
  );
}

export default App;
