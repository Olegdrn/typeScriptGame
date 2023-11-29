import '../style/MainField.css';


type MainFieldProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

export function MainField({ wordToGuess, guessedLetters, reveal = false }: MainFieldProps) {

  return (
    <div className="mainField">
      {wordToGuess.split("").map((letter, index) => (
        <span className='letter' key={index}>
          <span
            className={guessedLetters.includes(letter) || reveal
              ? 'visible'
              : 'hidden'}
            style={{
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}
          >{letter}
          </span>
        </span>
      )
      )
      }
    </div >
  )

}





// style={{
//   visibility:
//     guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
//   color:
//     !guessedLetters.includes(letter) && reveal ? "red" : "black"
// }}