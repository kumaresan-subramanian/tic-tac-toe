import { useState } from "react";
import { Square } from "./Square";
import { type } from "os";
type BoardProps = {
  isNextSquare: boolean;
  squares: Array<string>;
  onPlay: (sq: Array<string>) => void;
};
export const Board = ({ isNextSquare, squares, onPlay }: BoardProps) => {
  const handleClick = (index: number) => {
    if (squares[index] && calculateWinner(squares)) return;
    const newBoardSquare = squares.slice();
    if (isNextSquare) {
      newBoardSquare[index] = "X";
    } else {
      newBoardSquare[index] = "O";
    }

    onPlay(newBoardSquare);
  };

  const calculateWinner = (squares: Array<string>): string => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    }
    return "";
  };

  const winner = calculateWinner(squares);
  let status = "";
  if (winner != "") {
    status = "Winner is : " + winner;
  } else {
    status = "Next player: " + (isNextSquare ? "X" : "O");
  }
  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          squareClickHandle={() => handleClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          squareClickHandle={() => handleClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          squareClickHandle={() => handleClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          squareClickHandle={() => handleClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          squareClickHandle={() => handleClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          squareClickHandle={() => handleClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          squareClickHandle={() => handleClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          squareClickHandle={() => handleClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          squareClickHandle={() => handleClick(8)}
        ></Square>
      </div>
    </>
  );
};
