import "./RandomWord.css"

type RandomWordProps = {
    guessedLetters: string[]
    word: string
}

const RandomWord = ({guessedLetters, word}:RandomWordProps) => {

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