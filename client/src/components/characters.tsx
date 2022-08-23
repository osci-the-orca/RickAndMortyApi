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
  }, []);

  const charactersElement = characters.map((item: Character) => {
    return (
      <div
        key={item.id}
        className="character-card"
        onClick={() => setSelectedCharacter(item)}
      >
        <div className="character-info-div">
          <div>
            <img src={item.image} />
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
      {selectedCharacter && <CharacterModal character={selectedCharacter} onHide={() => setSelectedCharacter(undefined)} />}
    </>
  );
}

export default Characters;
