# Color Guessing Game

# Description

The Color Guessing Game is a fun and interactive web-based game where players must guess the correct color from a list of options. The game provides instant feedback, keeps track of the player's score, and includes animations for an engaging experience.

# Features

🎨 Random color selection at the start of each round.

✅ Instant feedback on whether the selected color is correct.

⏳ Incorrect choices fade out after 1 second.

🎯 Score tracking for correct guesses.

🔄 Automatic reset after 2 seconds upon a correct guess.

🎮 Interactive hover effects and animations for an enhanced user experience.

# Technologies Used

React (TypeScript) – For building the UI components.

Tailwind CSS – For styling and responsive design.

useState & useEffect – For managing game state and effects.

# Installation

To run the project locally, follow these steps:

Prerequisites

Ensure you have Node.js and Yarn or pnpm installed.

Steps

Clone the repository:

    git clone https://github.com/Dannynsikak/color-game.git

Navigate to the project directory:

    cd color-game

Install dependencies:

    pnpm install

    Start the development server:

    pnpm run dev

    Open your browser and go to:

    http://localhost:5173/

# How to Play

The game starts with a message: "Guess the correct color!"

Click on one of the color options displayed.

If you guess correctly, the message changes to "Correct! 🎉", your score increases, and the game resets after 2 seconds.

If you guess incorrectly, the message updates with "Wrong! Try again! 😢", and your selected color fades out after 1 second.

You can continue playing and improving your score!

The New Game button allows you to manually reset the game (only available after a correct guess).

Project Structure:

    ├── src/
    │ ├── components/
    │ │ ├── main.tsx
    │ ├── styles/
    │ │ ├── index.css
    │ ├── main.tsx
    │ ├── App.tsx
    ├── public/
    ├── package.json
    ├── README.md

Customization

You can customize the game by modifying:

Color options: Edit the colors array in main.tsx.

Animation duration: Adjust the setTimeout values for reset and fade-out effects.

Styling: Modify index.css or apply additional Tailwind CSS classes.

Contributing

Contributions are welcome! If you find any bugs or have feature suggestions, feel free to submit a pull request.

Have fun playing the Color Guessing Game! 🎨🔥
