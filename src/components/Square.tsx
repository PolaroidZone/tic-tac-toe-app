import React from "react";

type squareProps = {
  index: number;
  xIcon: string;
  oIcon: string;
  value: string;
  handleOnClick: (index: number) => void;
};

const Aquare: React.FC<squareProps> = ({
  index,
  handleOnClick,
  xIcon,
  oIcon,
  value,
}) => {
  return (
    <button className="square" key={index} onClick={() => handleOnClick(index)}>
      {value === xIcon ? (
        <img src={value} alt="" />
      ) : value === oIcon ? (
        <img src={value} alt="" />
      ) : null}
    </button>
  );
};

export default Aquare;
