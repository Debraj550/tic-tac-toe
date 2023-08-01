import React from "react";
import Box from "./Box";
import "./Boards.css";
const Boards = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return <Box className="box__items" value={value} onClick={null} />;
      })}
    </div>
  );
};

export default Boards;
