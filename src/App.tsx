import React, { useState } from 'react';
import './App.css';
import words from './wordlist.json';
import { Hangman } from './components/Hangman';
import { MainField } from './components/MainField';
import { Keyboard } from './components/Keyboard';


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return (
    <div className="App">
      <header>Lose Win</header>
      <Hangman />
      <MainField />
      <Keyboard />
    </div>
  );
}

export default App;
