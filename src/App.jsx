import { useState, useEffect } from "react";
import { Cell } from "./components/Cell";

const clearArray = Array(25).fill("");

function App() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(2);
  const [points, setPoints] = useState(0);
  const [cells, setCells] = useState(clearArray);
  const [isActive, setIsActive] = useState(false);

  //TODO Reset IsActive

  useEffect(() => {
    if (points === count) {
      console.log("You won");
      generateRandomNumbers();
      if (count < 25) {
        setPoints(0);
        setCount((currentCount) => currentCount + 2);
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
              isActive={false}
              setIsActive={setIsActive}
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
