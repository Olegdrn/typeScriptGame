import '../style/Keyboard.css';

const letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type Keyboard = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, disabled = false, inactiveLetters, addGuessedLetter }: Keyboard) {
  return (
    <div className="keyboard">
      {letters.map((el: string) => {
        const isActive = activeLetters.includes(el)
        const isInactive = inactiveLetters.includes(el)
        return <button onClick={() => addGuessedLetter(el)}
          className={`${isActive ? "active" : ""}
        ${isInactive ? "inactive" : ""}`
          }
          disabled={isInactive || isActive || disabled}
          key={el}
        >{el}</button>
      })}
    </div>
  )

}