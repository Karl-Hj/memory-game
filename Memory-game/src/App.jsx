import { useState } from "react";
import { Cell } from "./components/Cell";

function App() {
  const [cells, setCells] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <div className="app">
      <div className="boardgame">
        {cells.map((cell, index) => {
          return <Cell key={index} cell={cell} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
