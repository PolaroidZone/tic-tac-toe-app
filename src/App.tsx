import React, { useState } from "react";

import Grid from "./components/Grid";
import GameHeader from "./components/GameHeader";
import GameOver from "./components/GameOver";

import "./App.css";

import xIcon from "./assets/tic-tac-x.png";
import oIcon from "./assets/tic-tac-o.png";

function App() {
  const squares = Array(9).fill("");
  const [gameBoard, setGameBoard] = useState(squares);
  const [player, setCurrentPlayer] = useState(xIcon);
  const [symbol, setSymbol] = useState("X");

  const handleOnClick = (index: number) => {
    if (gameBoard[index] === "" && !checkWinner(gameBoard)) {
      const newGameBoard = [...gameBoard];
      newGameBoard[index] = player;
      setGameBoard(newGameBoard);
      setSymbol(player === xIcon ? "O" : "X");
      setCurrentPlayer(player === xIcon ? oIcon : xIcon);
    }
  };

  // a method that check which player won
  const checkWinner = (squares: string[]) => {
    const possibleWins = [
      // horizontal wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical wins
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal wins
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const possibleWin of possibleWins) {
      const [a, b, c] = possibleWin;
      if (
        squares[a] !== "" &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; //explain this
      } else {
        let isDraw = true;
        for (const square of squares) {
          if (square === "") {
            isDraw = false;
          }
        }
        if (isDraw) {
          return "Draw";
        }
      }
    }

    return "";
  };

  const winner = checkWinner(gameBoard);

  const status = `${symbol}: Your Turn`;

  return (
    <div className="container">
      <div className="game">
        <GameHeader
          setSymbol={setSymbol}
          setCurrentPlayer={setCurrentPlayer}
          setGameBoard={setGameBoard}
          squares={squares}
          status={status}
          xIcon={""}
        />
        {winner ? (
          <GameOver winner={winner} />
        ) : (
          <Grid
            gameBoard={gameBoard}
            handleOnClick={handleOnClick}
            xIcon={xIcon}
            oIcon={oIcon}
            status={""}
            player={""}
          />
        )}
      </div>
    </div>
  );
}

export default App;
