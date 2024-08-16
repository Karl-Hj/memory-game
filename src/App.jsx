import { useState, useEffect } from "react";
import { Cell } from "./components/Cell";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(2);

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

  function generateRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < count) {
      const randomNumber = Math.floor(Math.random() * 25);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    setNumbers(randomNumbers);
  }

  useEffect(() => {
    generateRandomNumbers();
  }, [count]);

  //Tie cell to id value which is set to true.
  //Display the picture if id is true display red if false.
  return (
    <div className="app">
      <div className="boardgame">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              cell={cell}
              id={index}
              setCells={setCells}
              cells={cells}
              numbers={numbers}
              setNumbers={setNumbers}
            />
          );
        })}
      </div>
      <button className="start-button" onClick={generateRandomNumbers}>
        Start
      </button>
    </div>
  );
}

export default App;
