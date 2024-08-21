import { useState, useEffect } from "react";
import { Cell } from "./components/Cell";

const clearArray = Array(25).fill("");

function App() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(2);
  const [points, setPoints] = useState(0);
  const [cells, setCells] = useState(clearArray);
  const [isActive, setIsActive] = useState(false);

  //Reset points and check for winning condition
  useEffect(() => {
    if (points === count) {
      if (count < 23) {
        setCount((currentCount) => currentCount + 2);
        setCells(clearArray);
        setPoints(0);
      }
    }
    if (points === 24) {
      alert("You won");
    }
  }, [points, count]);

  // Generate random numbers
  useEffect(() => {
    generateRandomNumbers();
  }, [count]);

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
      <button className="start-button">Start</button>
    </div>
  );
}

export default App;
