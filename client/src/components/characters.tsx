import { useState } from "react";

import Character from "../models/characterModel";
import CharacterModal from "./characterModal";
import "./characters.css";

interface Props {
  characters: Character[];
  onUpdateCharacter: (character: Character) => void;
  onDeleteCharacter: (character: Character) => void;
}

function Characters({ characters, onUpdateCharacter, onDeleteCharacter }: Props) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  function deleteCharacter() {
    if (selectedCharacter) {
      fetch(`http://localhost:3000/api/characters/${selectedCharacter.id}`, {
        method: "DELETE",
      });

      setSelectedCharacter(undefined);
      onDeleteCharacter(selectedCharacter);
    }
  }

  function updateCharacter(character: Character) {
    if (character) {
      fetch(`http://localhost:3000/api/characters/${character.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      });
    }
    setSelectedCharacter(undefined);

    onUpdateCharacter(character);
  }

  const charactersElement = characters.map((item: Character) => {
    return (
      <div key={item.id} className="character-card" onClick={() => setSelectedCharacter(item)}>
        <div className="character-img-div">
          <img className="character-img" src={item.image} />
        </div>
        <div className="character-info-div">
          <div className="name-div">
            <span>Name:</span> {item.name}
          </div>
          <div>
            <span>Species:</span> {item.species}
          </div>
          <div>
            <span>Status:</span> {item.status}
          </div>
          {item.type && (
            <div>
              <span>Type:</span> {item.type}
            </div>
          )}
          <div>
            <span>Gender:</span> {item.gender}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="main-container">
      <div className="character-container">{charactersElement}</div>
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onHide={() => setSelectedCharacter(undefined)}
          delete={deleteCharacter}
          update={updateCharacter}
        />
      )}
    </div>
  );
}

export default Characters;
