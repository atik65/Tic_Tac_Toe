import React, { useState } from "react";
import Board from "./Board";

let calcWinner = (square) => {
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < win.length; i++) {
    let [a, b, c] = win[i];
    if (square[a] && square[a] === square[b] && square[b] === square[c]) {
      return square[a];
    }
  }
  return null;
};

const Game = () => {
  let [history, setHistory] = useState([Array(9).fill(null)]);
  let [stepNumber, setStepNumber] = useState(0);
  let [isXnext, setIsxNext] = useState(true);

  let handleClick = (i) => {
    let historyPoint = history.slice(0, stepNumber + 1);
    let current = historyPoint[stepNumber];
    let square = [...current];

    if (calcWinner(current) || square[i]) {
      return;
    }
    square[i] = isXnext ? "X" : "0";

    setHistory([...historyPoint, square]);
    setStepNumber(historyPoint.length);
    setIsxNext(!isXnext);
  };

  let jumpto = (move) => {
    setStepNumber(move);
    setIsxNext(move % 2 === 0);
  };

  let winner = calcWinner(history[stepNumber]);
  let status = "";
  if (winner) {
    status = "The winner is : " + winner;
  } else {
    status = " Next Player is : " + (isXnext ? "X" : "0");
  }

  let moves = history.map((_, move) => {
    let desc = move ? "Go to Moeve > " + move : "Restart the Game";
    return (
      <li key={move}>
        <button onClick={() => jumpto(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <>
      <Board square={history[stepNumber]} onClick={handleClick} />
      <div className="info">
        <h2> {status} </h2>
        <h3> {moves} </h3>
      </div>
    </>
  );
};

export default Game;
