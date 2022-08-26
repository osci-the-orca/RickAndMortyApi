import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Characters from "./components/characters";
import Header from "./components/header";
import Character from "./models/characterModel";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  function saveCharacterToState(character: Character) {
    setCharacters([...characters, character]);
  }

  function updateCharacterInState(character: Character) {
    const charactersCopy = [...characters];
    const index = charactersCopy.findIndex((c) => c.id === character.id);

    charactersCopy.splice(index, 1, character);

    setCharacters(charactersCopy);
  }

  function deleteCharacterInState(character: Character) {
    const charactersCopy = [...characters];
    const index = charactersCopy.findIndex((c) => c.id === character.id);

    charactersCopy.splice(index, 1);

    setCharacters(charactersCopy);
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div className="App">
      <Header onNewCharacter={saveCharacterToState} />
      <Characters characters={characters} onUpdateCharacter={updateCharacterInState} onDeleteCharacter={deleteCharacterInState} />
    </div>
  );
}

export default App;
