import '../style/MainField.css';
export function MainField() {
  const word: string = "test";
  const guessedLetters: string[] = ['t', 'g']

  return (
    <div className="mainField">
      {word.split("").map((letter, index) => (
        <span className='letter' key={index}>{letter}
          <span className={guessedLetters.includes(letter) ? 'visible' : 'hidden'}>
          </span>
        </span>
      )
      )
      }
    </div >
  )

}