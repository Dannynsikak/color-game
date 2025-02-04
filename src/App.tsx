import { useState } from "react";
import "./index.css";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

export default function ColorGuessingGame() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [message, setMessage] = useState("Guess the correct color!");
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleGuess(color: string) {
    if (color === targetColor) {
      setMessage("Correct! 🎉");
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setMessage("Wrong! Try again! 😢");
    }
  }

  function resetGame() {
    setTargetColor(getRandomColor());
    setMessage("Guess the correct color!");
    setIsCorrect(false);
  }

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold" data-testid="gameInstructions">
        {message}
      </h1>
      <div
        className="w-32 h-32 rounded-lg border-2 border-black"
        style={{ backgroundColor: targetColor }}
        data-testid="colorBox"
      />
      <div className="flex flex-wrap justify-center gap-4">
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            className="w-16 h-16 rounded-lg border-2 border-black"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
          >
            {color}
          </button>
        ))}
      </div>
      <p className="text-xl font-semibold" data-testid="score">
        Score: {score}
      </p>
      <button
        type="button"
        className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-600"
        onClick={resetGame}
        data-testid="newGameButton"
        disabled={!isCorrect}
      >
        New Game
      </button>
    </div>
  );
}
