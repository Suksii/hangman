import './App.css'
import HangMan from "./hangman/HangMan.tsx";
import Keyboard from "./keyboard/Keyboard.tsx";
import RandomWord from "./randomWord/RandomWord.tsx";
import {useState} from "react";
import words from "./wordList.json";

function App() {

    const [guessedLetters, setGuessedLetters] = useState<string[]>(['m', 'a', 'r', 'i', 'o'])
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const [word, setWord] = useState<string>(randomWord)

    const wrongGuesses = guessedLetters.filter(letter => !word.includes(letter))

    return (
    <div className="container">
      <h2>Hangman</h2>
        <HangMan numberOfWrongGuesses={wrongGuesses.length}/>
        <RandomWord guessedLetters={guessedLetters} word={word} />
        <Keyboard />
    </div>
    )
    }

export default App
