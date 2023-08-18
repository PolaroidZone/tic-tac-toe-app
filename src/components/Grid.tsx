import React from "react";
import Square from "./Square";

type gridProps = {
  status: string;
  gameBoard: string[];
  xIcon: string;
  oIcon: string;
  player: string;
  handleOnClick: (index: number) => void;
};

const Grid: React.FC<gridProps> = ({
  gameBoard,
  xIcon,
  oIcon,
  handleOnClick,
}) => {
  return (
    <div className="game-body">
      <div className="game-grid">
        {gameBoard.map((value: string, index) => (
          <Square
            key={index}
            index={index}
            value={value}
            oIcon={oIcon}
            xIcon={xIcon}
            handleOnClick={handleOnClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
