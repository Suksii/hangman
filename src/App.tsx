import './App.css'
import HangMan from "./hangman/HangMan.tsx";
import Keyboard from "./keyboard/Keyboard.tsx";
import RandomWord from "./randomWord/RandomWord.tsx";
import Message from "./message/Message.tsx";
import {useCallback, useEffect, useState} from "react";
import words from "./wordList.json";

function App() {

    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const [word, setWord] = useState<string>(randomWord)

    const wrongGuesses = guessedLetters.filter(letter => !word.includes(letter))

    const isGameOver = wrongGuesses.length >= 6;
    const isGameWon = word.split("").every(letter => guessedLetters.includes(letter))


    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isGameOver || isGameWon) return
        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isGameOver, isGameWon])

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
        {isGameOver && <Message message="Game Over!"/>}
        {isGameWon && <Message message="You Win!"/>}
        <HangMan numberOfWrongGuesses={wrongGuesses.length}/>
        <RandomWord guessedLetters={guessedLetters} word={word} revealWord={isGameOver} />
        <Keyboard activeLetters={guessedLetters.filter(letter => word.includes(letter))}
                  addGuessedLetter={addGuessedLetter}
                  inactiveLetters={guessedLetters.filter(letter => !word.includes(letter))}
                  disabled={isGameOver || isGameWon}
        />
    </div>
    )
    }

export default App
