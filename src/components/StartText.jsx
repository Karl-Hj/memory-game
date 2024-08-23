export function StartText({
  clearArray,
  setCells,
  generateRandomNumbers,
  visible,
  setVisible,
}) {
  function startGame() {
    setCells(clearArray);
    setVisible(false);
    generateRandomNumbers();
  }

  return (
    <>
      {visible && (
        <div className="start-container">
          <div className="start-text">Memorize the pandas!</div>
          <button className="start-button" onClick={startGame}>
            Press Start
          </button>
        </div>
      )}
    </>
  );
}
