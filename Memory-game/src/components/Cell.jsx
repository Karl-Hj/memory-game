export function Cell({ cell, index }) {
  return (
    <div className="square" index={index}>
      <div>{cell}</div>
    </div>
  );
}
