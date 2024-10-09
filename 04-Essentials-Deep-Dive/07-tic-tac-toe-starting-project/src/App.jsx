import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  //DERIVING STATE
  //const { square, player } = turn; This statement takes the square and player properties in the turn object and assigns them to two separate variables (square and player).
  //The information on which square the move was made in each turn object and which player made this move is assigned to separate variables.
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      // example of WINNING_COMBINATIONS =>   { row: 0, column: 0 },
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      // example of WINNING_COMBINATIONS =>   { row: 0, column: 1 },
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      // example of WINNING_COMBINATIONS =>   { row: 0, column: 2},
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");
  const [players, setPlayers] = useState(PLAYERS);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
      /*   console.log(prevTurns);
      //activePlayer keeps track of the active player throughout the game, but updates can be asynchronous.
      //currentPlayer is used to instantly determine which player is making a move during a move.
      let currentPlayer = "X";
      //prevTurns[0].player => By putting the new move at the beginning of the array, ensure that the most recent move is always the first item.
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      } */
      // example =>
      //{ square: { row: 0, col: 0 }, player: "O" },  // latest move
      //{ square: { row: 1, col: 1 }, player: "X" },  // previous moves
      //{ square: { row: 0, col: 2 }, player: "O" },
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.Y}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* {winner && ...} is a JavaScript technique called "short-circuit evaluation". If the winner value is true or truthy (i.e. a non-empty value), the JSX part on the right side of this condition is rendered. */}
        {/* {winner && <p>You won, {winner} ! </p>}*/}
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
