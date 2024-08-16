import { useEffect, useState } from "react";

export function Cell({ cell, id, setCells, cells, numbers, setPoints }) {
  const [isActive, setIsActive] = useState(false);

  function tieNumbersToId() {
    const updateCells = cells.map((cell, index) => {
      if (numbers.includes(index)) {
        return true;
      } else {
        return false;
      }
    });
    setCells(updateCells);
  }

  useEffect(() => {
    tieNumbersToId();
  }, [numbers]);

  function handleClick(e) {
    if (cell === true) {
      setIsActive(true);
      score(e);
    }
  }

  function score(e) {
    if (e.target.classList.contains("correct")) {
      console.log("Clicked element classes:", e.target.classList);
      if (!e.target.classList.contains("active")) {
        setPoints((prevPoints) => prevPoints + 1);
        e.target.classList.add("active");
      }
    } else {
      // console.log("Cell is not active");
    }
  }

  return (
    <div className="square" id={id}>
      <div
        className={`cells ${!cell ? "" : "correct"} ${
          !isActive ? "" : "active"
        } `}
        onClick={handleClick}
      >
        {cell}
      </div>
    </div>
  );
}
