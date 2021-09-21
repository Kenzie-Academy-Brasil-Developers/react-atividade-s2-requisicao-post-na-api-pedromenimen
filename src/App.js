import { useState } from "react";
import "./App.css";
import Display from "./Component/Display";
import Login from "./Component/Login";

function App() {
  const [display, setDisplay] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Login setDisplay={setDisplay}></Login>
        <Display display={display}></Display>
      </header>
    </div>
  );
}

export default App;
