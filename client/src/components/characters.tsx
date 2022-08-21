import { useEffect, useState } from "react";
import "./characters.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

const handleClick = (e) => {
    
}

  const charactersElement = characters.map((item: any) => {
    return (
      <div key={item.id} className="character-card" onClick={handleClick}>
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
  return <div className="character-container">{charactersElement}</div>;
}

export default Characters;
