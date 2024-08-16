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

  function handleClick() {
    tieNumbersToId();
  }

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={`cells ${!cell ? "" : "correct"} `}>{cell}</div>
    </div>
  );
}
