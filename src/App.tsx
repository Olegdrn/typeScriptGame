import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import words from './wordlist.json';
import { Hangman } from './components/Hangman';
import { MainField } from './components/MainField';
import { Keyboard } from './components/Keyboard';


function getWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}


function App() {
  //Слово, которое необходимо угадать
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);

  // Угаданные буквы
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters: string[] = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const isLoser: boolean = incorrectLetters.length >= 6;
  const isWinner: boolean = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])

  }, [guessedLetters, isLoser, isWinner])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])



  return (
    <div className="App">
      <header>
        {isWinner && "Victory! - try again"}
        <br />
        {isWinner && "press Enter"}
        {isLoser && "GAME OVER - try again"}
        <br />
        {isLoser && "press Enter"}
      </header>
      <Hangman numberOfGuesses={incorrectLetters.length} />
      <MainField reveal={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;
