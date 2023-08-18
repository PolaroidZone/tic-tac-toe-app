import React from "react";

type headerProps = {
  status: string;
  shouldReset: React.Dispatch<React.SetStateAction<boolean>>;
  };

const GameHeader: React.FC<headerProps> = ({
  status,
  shouldReset
}) => {
  function handleReset() {
    shouldReset(true)
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
