import { useEffect, useState } from "react";

export function Cell({ cell, id, setCells, cells, numbers, setNumbers }) {
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

  function handleClick() {
    if (cell === true) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }

  return (
    <div className="square" id={id}>
      <div className={`cells ${!cell ? "" : "correct"} `} onClick={handleClick}>
        {cell}
      </div>
    </div>
  );
}
