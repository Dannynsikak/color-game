import { useState, useEffect } from "react";
import "./index.css";

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "black"];

export default function ColorGuessingGame() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [message, setMessage] = useState("Guess the correct color!");
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lastClickedColor, setLastClickedColor] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleGuess(color: string) {
    setLastClickedColor(color);
    setGameStarted(true);
    if (color === targetColor) {
      setMessage("Correct! 🎉");
      setScore(score + 1);
      setIsCorrect(true);
      setTimeout(resetGame, 2000); // Automatically reset the game after 2 seconds
    } else {
      setMessage(`Wrong! Try again! 😢 You clicked ${color}`);
    }
  }

  function resetGame() {
    setTargetColor(getRandomColor());
    setMessage("Guess the correct color!");
    setIsCorrect(false);
    setLastClickedColor(null);
    setGameStarted(false);
  }

  useEffect(() => {
    if (lastClickedColor && !isCorrect) {
      const timer = setTimeout(() => {
        setLastClickedColor(null);
      }, 1000); // Fade out after 1 second
      return () => clearTimeout(timer);
    }
  }, [lastClickedColor, isCorrect]);

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold" data-testid="gameInstructions">
        {message}
      </h1>
      {/* color box- show target color only if guessed correctly */}
      <div
        className="w-32 h-32 rounded-lg border-2 border-black flex items-center justify-center text-xl font-bold"
        style={{
          backgroundColor: isCorrect ? targetColor : "gray",
          color: isCorrect ? "white" : "black",
        }}
        data-testid="colorBox"
      />
      {/* Color Options */}
      <div className="flex flex-wrap justify-center gap-4 text-white font-semibold">
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            className={`w-16 h-16 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110 hover:opacity-80 ${
              lastClickedColor === color ? "fade-out" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
          >
            {color}
          </button>
        ))}
      </div>
      {/* Score Display */}
      <p className="text-xl font-semibold" data-testid="score">
        Score: {score}
      </p>
      <button
        type="button"
        className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-600 cursor-pointer"
        onClick={resetGame}
        data-testid="newGameButton"
        disabled={!isCorrect}
      >
        New Game
      </button>
      {/* Game Status */}
      {gameStarted && (
        <p className="text-xl font-semibold" data-testid="gameStatus">
          {isCorrect ? "You guessed the correct color!" : "Keep trying!"}
        </p>
      )}
    </div>
  );
}
