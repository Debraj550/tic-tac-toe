import React from "react";
import Box from "./Box";
import "./Boards.css";

const Boards = ({ board, handleClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            onClick={() => value === null && handleClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Boards;
