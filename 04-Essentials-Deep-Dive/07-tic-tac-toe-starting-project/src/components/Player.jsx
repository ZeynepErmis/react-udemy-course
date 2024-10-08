import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  //if your new state depends on your previous state value, you should not update state like this:
  /* function handleEditClick() {
    setIsEditing(!isEditing);
  } */

  //In React, state updates are sometimes not processed asynchronously, so you may not be able to trust the current value of isEditing.
  //So in this approach, you send a function based on the current state. This function takes the most current state (editing) as a parameter and reverses that value (!editing).
  function handleEditClick() {
    //always working with the lastest value when using as a function
    setIsEditing((editing) => !editing);
    console.log(isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaptoin = "Edit";

  if (isEditing) {
    //TWO WAY BINDING
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    //let btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
