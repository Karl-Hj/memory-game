export function Cell({ cell, id }) {
  //Random function to select two id and then incress if right.
  //Tie cell to id value which is set to true.
  //Display the picture if id is true display red if false.

  function handleClick() {
    console.log(id);
  }

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div>{cell}</div>
    </div>
  );
}
