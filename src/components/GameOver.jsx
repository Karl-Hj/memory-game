export function GameOver({
  winningConditon,
  setWinningCondition,
  setCells,
  setCount,
  setPoints,
  clearArray,
  generateRandomNumbers,
}) {
  function reset() {
    setCells(clearArray);
    setCount(2);
    setPoints(0);
    setWinningCondition(undefined);
    generateRandomNumbers();
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
