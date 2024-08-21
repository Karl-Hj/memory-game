import { useState, useEffect } from "react";
import { Cell } from "./components/Cell";
import { GameOver } from "./components/GameOver";

const clearArray = Array(25).fill("");

function App() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(2);
  const [points, setPoints] = useState(0);
  const [cells, setCells] = useState(clearArray);
  const [isActive, setIsActive] = useState(false);
  const [winningConditon, setWinningCondition] = useState(undefined);

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
      setWinningCondition(true);
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
  // console.log("winningCondition is :" + winningConditon);
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
              setWinningCondition={setWinningCondition}
            />
          );
        })}
      </div>
      {winningConditon !== undefined && (
        <GameOver
          winningConditon={winningConditon}
          setWinningCondition={setWinningCondition}
          setCells={setCells}
          setCount={setCount}
          setPoints={setPoints}
          clearArray={clearArray}
        />
      )}
    </div>
  );
}

export default App;
