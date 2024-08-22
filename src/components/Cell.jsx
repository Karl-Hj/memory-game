import { useRef } from "react";

export function Cell({ cell, id, setPoints, setWinningCondition }) {
  const cellRef = useRef(null);

  //Check if cell have class correct or not.
  function handleClick() {
    if (cell) {
      if (cellRef.current) {
        if (cellRef.current.classList.contains("correct")) {
          console.log("Clicked element classes:", cellRef.current.classList);
          if (!cellRef.current.classList.contains("active")) {
            cellRef.current.classList.add("active");
            setPoints((prevPoints) => prevPoints + 1);
          }
        }
      }
    } else {
      setWinningCondition(false);
    }
  }

  return (
    <div className="square" id={id}>
      <div
        className={`cells ${!cell ? "" : "correct"} `}
        onClick={handleClick}
        ref={cellRef}
      >
        {cell}
      </div>
    </div>
  );
}
