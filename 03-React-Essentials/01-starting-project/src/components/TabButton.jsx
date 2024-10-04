import React from "react";
//This usage is called destructuring { label }. It allows you to extract the label value directly from the props object and use it as just label instead of props.label. This makes the code shorter, more readable, and more organized.
/* export default function TabButton({ label }) {
  return (
    <li>
      <button>{label}</button>
    </li>
  );
} */

export default function TabButton({ children, isSelected, ...props }) {
  console.log("TAB BUTTON COMPONENT EXECUTING");

  return (
    <li>
      {/* handleClick(): When you add the parentheses, this function is called immediately. That is, the handleClick function is run immediately when the component is rendered, without waiting for the onClick event to occur. This is usually undesirable, because we don't want the function to run before the event is triggered. */}
      {/* must not add handleClick(), should be {handleClick} because want to use the function as a value */}
      <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
  );
}
