import { useEffect, useRef } from "react";

export function Cell({ cell, id, setPoints, setWinningCondition }) {
  const cellRef = useRef(null);

  //Adds class correct, if cell is true and force reflow and remove animation class
  useEffect(() => {
    if (cell) {
      cellRef.current.classList.add("correct");
      void cellRef.current.offsetWidth;
      cellRef.current.classList.add("animation");
    }
    const animation = setTimeout(() => {
      cellRef.current.classList.remove("animation");
    }, 3500);

    return () => clearTimeout(animation);
  }, [cell]);

  //Check if cell have class correct or not.
  function handleClick() {
    if (cell) {
      if (cellRef.current) {
        if (cellRef.current.classList.contains("correct")) {
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
        className={`cells ${cell}`}
        onClick={handleClick}
        ref={cellRef}
      ></div>
    </div>
  );
}
