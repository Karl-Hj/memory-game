import { useEffect } from "react";

export function Cell({
  cell,
  id,
  setCells,
  cells,
  numbers,
  setPoints,
  isActive,
  setIsActive,
}) {
  //Tie random numbers to cells
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

  //Check if cell is correct and check if cell is correct or not.
  function handleClick(e) {
    if (cell === true) {
      setIsActive(true);
      CellCheck(e);
    }
  }

  function CellCheck(e) {
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
