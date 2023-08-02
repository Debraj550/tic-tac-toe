import "./App.css";
import Boards from "./componenets/Boards";
import React, { useState } from "react";
import { ScoreBoard } from "./componenets/ScoreBoard";
import { ResetButton } from "./componenets/ResetButton";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [gameOver, setGameOver] = useState(false);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const handleBoxClick = (boxId) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxId) {
        return isXTurn === true ? "X" : "O";
      } else return value;
    });
    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "X") {
        let score = xScore;
        score = score + 1;
        setXScore(score);
      } else {
        let score = oScore;
        score = score + 1;
        setOScore(score);
      }
      resetBoard();
    }
    setIsXTurn(!isXTurn);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        return board[a];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard xScore={xScore} oScore={oScore} xPlaying={isXTurn} />
      <Boards board={board} handleClick={handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
