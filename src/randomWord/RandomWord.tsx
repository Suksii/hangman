import "./RandomWord.css"
import words from "../wordList.json";
import {useState} from "react";

const RandomWord = () => {

    const randomWord = words[Math.floor(Math.random() * words.length)];

    const guessedLetters = ['d', 'm'];

    const [word, setWord] = useState(randomWord)

    return (
        <div className="hidden_word">
            {word.split("").map((letter, index) => (
                <span key={index}
                      className="letter">
                    <span style={{
                        visibility: guessedLetters.includes(letter)
                            ? "visible"
                            : "hidden"
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default RandomWord;