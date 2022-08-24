import { useEffect, useState } from "react";

import Character from "../models/characterModel";
import CharacterModal from "./characterModal";
import "./characters.css";

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, [selectedCharacter]);

  function deleteCharacter() {
    if (selectedCharacter) {
      fetch(`http://localhost:3000/${selectedCharacter.id}`, {
        method: "DELETE",
      });

      //TO re-render when deleted.
      setSelectedCharacter(undefined);
    }
  }

  function updateCharacter(character: Character) {
    if (character) {
      fetch(`http://localhost:3000/${character.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      });
    }
    setSelectedCharacter(undefined);
  }

  const charactersElement = characters.map((item: Character) => {
    return (
      <div
        key={item.id}
        className="character-card"
        onClick={() => setSelectedCharacter(item)}
      >
        <div className="character-info-div">
          <div>
            <img src={item.image} height="100px" />
          </div>
          <div className="name-div">Name: {item.name}</div>
          <div>Species: {item.species}</div>
          <div>Status: {item.status}</div>
          {item.type && <div>Type: {item.type}</div>}
          <div>Gender: {item.gender}</div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="character-container">{charactersElement}</div>
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onHide={() => setSelectedCharacter(undefined)}
          delete={deleteCharacter}
          update={updateCharacter}
        />
      )}
    </>
  );
}

export default Characters;
