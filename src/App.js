import "./App.css";
import Boards from "./componenets/Boards";
import React, { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="App">
      <Boards board={board} onClicK={null} />
    </div>
  );
}

export default App;
