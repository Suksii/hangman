import './App.css'
import HangMan from "./hangman/HangMan.tsx";
import Keyboard from "./keyboard/Keyboard.tsx";
import RandomWord from "./randomWord/RandomWord.tsx";

function App() {


    return (
    <div className="container">
      <h2>Hangman</h2>
        <HangMan />
        <RandomWord />
        <Keyboard />
    </div>
    )
    }

export default App
