import { useState } from "react";
import Characters from "./components/characters";



function App() {

  const [characters, setCharacters] = useState([]);

  return (
    <div className="App">
    <Characters/>
    </div>
  );
}

export default App;

