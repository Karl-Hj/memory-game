import { useState, useEffect, useRef } from "react";
import { Cell } from "./components/Cell";
import { GameOver } from "./components/GameOver";
import background from "./pictures/background-zoo.png";
import { StartText } from "./components/StartText";

const clearArray = Array(25).fill("");

function App() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(2);
  const [points, setPoints] = useState(0);
  const [cells, setCells] = useState(clearArray);
  const [winningConditon, setWinningCondition] = useState(undefined);
  const [visible, setVisible] = useState(true);

  //Reset points and check for winning condition.
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
  }, [points]);

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
  useEffect(() => {
    if (!visible) {
      const updateCells = cells.map((_, index) => {
        if (numbers.includes(index)) {
          return true;
        } else {
          return false;
        }
      });
      setCells(updateCells);
    } else {
    }
  }, [numbers]);

  return (
    <div className="app">
      <StartText
        clearArray={clearArray}
        setCells={setCells}
        generateRandomNumbers={generateRandomNumbers}
        visible={visible}
        setVisible={setVisible}
      />
      <img className="background-image" src={background} />

      <div className="boardgame">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              numbers={numbers}
              cell={cell}
              id={index}
              setPoints={setPoints}
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
          generateRandomNumbers={generateRandomNumbers}
        />
      )}
    </div>
  );
}

export default App;
