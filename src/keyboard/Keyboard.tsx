import { keyboard } from "../keyboard.ts";
import "./Keyboard.css"

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void

}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter}:KeyboardProps) => {



    return (
        <div className="keyboard">
            {keyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard_row">
                    {row.map((letter, letterIndex) => {
                        const isActive = activeLetters.includes(letter)
                        const isInactive = inactiveLetters.includes(letter)
                        return (
                        <button
                            disabled={isActive || isInactive}
                            key={letterIndex}
                            className="keyboard_letter"
                            onClick={() => addGuessedLetter(letter)}
                        >
                            {letter}
                        </button>
                        )})}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;