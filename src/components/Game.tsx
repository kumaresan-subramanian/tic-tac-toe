import { useState } from "react";
import { Board } from "./Borad";
import { Square } from "./Square";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isNextSquare = currentMove % 2 == 0;
  const currentSquare = history[currentMove];

  const onPlay = (newSquare: Array<string>) => {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquare];
    setHistory(nextHistory);
    setCurrentMove(history.length - 1);
  };

  const jumTo = (index: number) => {
    setCurrentMove(index);
  };

  const moves = history.map((square, index) => {
    let description;
    if (index > 0) {
      description = "Go to move :#" + index;
    } else {
      description = "Game start";
    }

    return (
      <li>
        <button onClick={() => jumTo(index)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="gameBoard">
        <Board
          isNextSquare={isNextSquare}
          squares={currentSquare}
          onPlay={onPlay}
        ></Board>
      </div>
      <div className="gameInfo">{moves}</div>
    </div>
  );
};
