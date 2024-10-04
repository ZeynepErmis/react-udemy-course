import Header from "./components/Header/Header.jsx";
import CoreConceps from "./components/CoreConcept/CoreConceps.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    //<> is alternavite for <Fragment></Fragment>, if you use <div></div> you will see unnecessary div in DOM
    <>
      <Header />
      <main>
        <CoreConceps />
        <Examples />
      </main>
    </>
  );
}

export default App;
