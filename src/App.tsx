import './App.css'
import HangMan from "./hangman/HangMan.tsx";
import Keyboard from "./keyboard/Keyboard.tsx";
import RandomWord from "./randomWord/RandomWord.tsx";
import {useCallback, useEffect, useState} from "react";
import words from "./wordList.json";

function App() {

    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const [word, setWord] = useState<string>(randomWord)

    const wrongGuesses = guessedLetters.filter(letter => !word.includes(letter))


    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter)) return
        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters])

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const letter = event.key.toLowerCase()
            if(!letter.match(/[a-z]/i)) return
            event.preventDefault()
            addGuessedLetter(letter)
        }
        window.addEventListener('keypress', handleKeyPress)
        return () => window.removeEventListener('keypress', handleKeyPress)
    }, [guessedLetters])


    return (
    <div className="container">
      <h2>Hangman</h2>
        <HangMan numberOfWrongGuesses={wrongGuesses.length}/>
        <RandomWord guessedLetters={guessedLetters} word={word} />
        <Keyboard activeLetters={guessedLetters.filter(letter => word.includes(letter))}
                  addGuessedLetter={addGuessedLetter}
                  inactiveLetters={guessedLetters.filter(letter => !word.includes(letter))}
        />
    </div>
    )
    }

export default App
