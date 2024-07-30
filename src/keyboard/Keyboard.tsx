import { keyboard } from "../keyboard.ts";
import "./Keyboard.css"
import {useState} from "react";

const Keyboard = () => {

    const [guessedLetter, setGuessedLetter] = useState('')
    const [isGuessed, setIsGuessed] = useState(false)

    console.log(guessedLetter)

    return (
        <div className="keyboard">
            {keyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard_row">
                    {row.map((letter, letterIndex) => (
                        <button
                            disabled={isGuessed}
                            key={letterIndex}
                            className="keyboard_letter"
                            onClick={() => setGuessedLetter(letter)}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;