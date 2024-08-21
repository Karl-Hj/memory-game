export function GameOver({
  winningConditon,
  setWinningCondition,
  setCells,
  setCount,
  setPoints,
  clearArray,
}) {
  function reset() {
    setCells(clearArray);
    setCount(0);
    setPoints(0);
    setWinningCondition(undefined);
  }
  return (
    <div className={winningConditon ? "winner" : "game-over"}>
      {winningConditon ? <p className="winner-text">You Won!</p> : " "}
      <button className="game-over__button" onClick={reset}>
        Play Again!
      </button>
    </div>
  );
}
