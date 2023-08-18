import React from "react";
import Square from "./Square";
import gameDrawIcon from "../assets/tic-tac-OX.png";

type gameOverProps = {
  winner: string;
};

const GameOver: React.FC<gameOverProps> = ({ winner }) => {
  const renderResults = () => {
    if (winner === "Draw") {
      return <h2>Draw</h2>;
    } else {
      if (winner === "xIcon") {
        return <h2>O Wins</h2>;
      } else {
        return <h2>X Wins</h2>;
      }
    }
  };

  return (
    <div className="game-over">
      <div className="results-container">
        <h1>Game over</h1>
        <div className="results">
          {winner === "Draw" ? (
            <div>
              <Square
                index={0}
                value={gameDrawIcon}
                xIcon={gameDrawIcon}
                oIcon={gameDrawIcon}
                handleOnClick={() => {}}
              />
              {renderResults()}
            </div>
          ) : (
            <div>
              <Square
                index={0}
                value={winner}
                xIcon={winner}
                oIcon={winner}
                handleOnClick={() => {}}
              />
              {renderResults()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameOver;
