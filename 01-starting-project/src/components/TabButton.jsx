export default function TabButton({children, onSelect}) {
 
  return (
    <li>
      {/* children refers the content between your component text */}
      <button onClick={onSelect} >{children}</button>
    </li>
  );
}
