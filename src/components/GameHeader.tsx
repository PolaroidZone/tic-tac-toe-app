import React from "react";

type headerProps = {
  status: string;
  xIcon: string;
  squares: string[];
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>; // this is a function that takes in a string and returns void
  setSymbol: React.Dispatch<React.SetStateAction<string>>; // this is a function that takes in a string and returns void
  setGameBoard: React.Dispatch<React.SetStateAction<string[]>>; // this is a function that takes in a string array and returns void
};

const GameHeader: React.FC<headerProps> = ({
  status,
  xIcon,
  squares,
  setGameBoard,
  setCurrentPlayer,
  setSymbol,
}) => {
  function handleReset() {
    setGameBoard(squares);
    setCurrentPlayer(xIcon);
    setSymbol("X");
  }

  return (
    <div className="game-title">
      <h1>Tic Tac Toe</h1>
      <div className="game-controls">
        <div className="reset-btn" onClick={() => handleReset()}>
          <h3>Reset</h3>
        </div>
        <div className="play-status">
          <h3>{status}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
