import { keyboard } from "../keyboard.ts";
import "./Keyboard.css"

const Keyboard = () => {
    return (
        <div className="keyboard">
            {keyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard_row">
                    {row.map((letter, letterIndex) => (
                        <div key={letterIndex} className="keyboard_letter">{letter}</div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;