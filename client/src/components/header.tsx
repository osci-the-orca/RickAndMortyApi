import { useState } from "react";
import { Modal } from "react-bootstrap";
import logo from "../images/rick_and_morty_header.jpg";
import Character from "../models/characterModel";
import CreateCharacterModal from "./createCharacterModal";
import "./header.css";

interface Props {
  onNewCharacter: (character: Character) => void;
}

export default function Header({ onNewCharacter }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} />
        <div>
          <button className="add-character-btn" onClick={() => setShowModal(true)}>
            + CHARACTER
          </button>
        </div>
        <Modal show={showModal} centered onHide={() => setShowModal(false)}>
          <CreateCharacterModal onNewCharacter={onNewCharacter} onHide={() => setShowModal(false)} />
        </Modal>
      </div>
    </div>
  );
}
