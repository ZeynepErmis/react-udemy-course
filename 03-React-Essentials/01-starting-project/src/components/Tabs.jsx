import React from "react";
export default function Tabs({ children, buttons, ButtonsContainer ='menu' }) {
  //buttonsContainer can take an HTML element or a component as a prop.
  //The statement const ButtonsContainer = buttonsContainer; allows us to use this prop as a component within JSX.
  //This lets you flexibly use ButtonsContainer with any desired HTML structure (e.g., div, menu, section, etc.).
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
