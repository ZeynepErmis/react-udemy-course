import React from "react";

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over </h2>
      {/* if we have a winner */}
      {winner && <p>{winner} won</p>}
      {/* if we do not have a winner */}
      {!winner && <p>It is a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
