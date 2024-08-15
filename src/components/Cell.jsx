export function Cell({ cell, index }) {
  let random = Math.random();
  console.log(random);
  return (
    <div className="square" index={index}>
      <div>{cell}</div>
    </div>
  );
}
