import React from "react";
import Square from "./Square";

const Board = ({ onClick, square }) => {
  let createSquare = (i) => {
    return <Square value={square[i]} onClick={() => onClick(i)} />;
  };
  return (
    <>
      <div className="parentBoard">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div className="boardRow">
            {createSquare(0)}
            {createSquare(1)}
            {createSquare(2)}
          </div>
          <div className="boardRow">
            {createSquare(3)}
            {createSquare(4)}
            {createSquare(5)}
          </div>
          <div className="boardRow">
            {createSquare(6)}
            {createSquare(7)}
            {createSquare(8)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
