import './App.css'
import {useState} from "react";
import words from './wordList.json'
import HangMan from "./hangman/HangMan.tsx";
import Keyboard from "./keyboard/Keyboard.tsx";

function App() {

    const randomWord = words[Math.floor(Math.random() * words.length)];
    const [message, setMessage] = useState('Well done!');
    const [mistakes, setMistakes] = useState(0);

    const [word, setWord] = useState(randomWord)

    console.log(word)

    return (
    <div className="container">
      <h2>Hangman</h2>
        <div>
            {message}
        </div>
            <HangMan />
        <div className="hidden_word">
            {word.split('').map((letter, index) => {
                return (
                    <span key={index}>
                        {word.includes(letter) ? letter : '_'}
                    </span>
                )
            })}
        </div>
        <Keyboard />
    </div>
    )
    }

export default App
