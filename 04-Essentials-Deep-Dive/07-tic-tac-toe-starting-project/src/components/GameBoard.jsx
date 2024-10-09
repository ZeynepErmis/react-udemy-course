
export default function GameBoard({ onSelectSquare, board }) {
  /*   let gameBoard = initialGameBoard;
  //DERIVING STATE
  //const { square, player } = turn; This statement takes the square and player properties in the turn object and assigns them to two separate variables (square and player).
  //The information on which square the move was made in each turn object and which player made this move is assigned to separate variables.
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  } */
  /*   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //When the user selects a cell, a copy (updatedBoard) is created from the current board (prevGameBoard) and an update is made on this copy. The game board state is updated with setGameBoard to updatedBoard and this updated value is used in the next render of the component.
  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      //updating state ummutable way
      const updatedBoard = [
        //the elements of the existing array are transferred to a new array using the spread operator (...). In this way, the original state of the innerArray is preserved and a new array is created.
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  } */

  return (
    <ol id="game-board">
      {board .map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
