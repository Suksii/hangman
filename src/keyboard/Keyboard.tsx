import { keyboard } from "../keyboard.ts";
import "./Keyboard.css"
import {useState} from "react";

const Keyboard = () => {

    const [guessedLetter, setGuessedLetter] = useState('')

    console.log(guessedLetter)

    return (
        <div className="keyboard">
            {keyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard_row">
                    {row.map((letter, letterIndex) => (
                        <div key={letterIndex}
                             className="keyboard_letter"
                             onClick={() => setGuessedLetter(letter)}
                        >
                            {letter}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;