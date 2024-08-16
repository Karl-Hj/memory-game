import { useState, useEffect } from "react";
import { Cell } from "./components/Cell";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(2);
  const [points, setPoints] = useState(0);

  const [cells, setCells] = useState(Array(25).fill(""));

  // useEffect(() => {

  //   console.log(count);
  // }, [count]);

  useEffect(() => {
    if (points === count) {
      console.log("You won");
      if (count < 25) {
        setPoints(0);
        setCount((currentCount) => currentCount + 2);
        generateRandomNumbers();
      }
    }
    console.log("nuvarande poäng :" + points);
  }, [points, count]);

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
              count={count}
              points={points}
              setPoints={setPoints}
              // winning={winning}
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
