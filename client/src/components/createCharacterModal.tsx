import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../components/createCharacterModal.css";
import Character from "../models/characterModel";

interface Props {
  onNewCharacter: (character: Character) => void;
  onHide: () => void;
}

export default function CreateCharacterModal(props: Props) {
  const [showCreateCharacter, setShowCreateCharacter] = useState(false);
  const [character, setCharacter] = useState({} as Character);

  async function createCharacter(character: Character) {
    const response = await fetch("http://localhost:3000/api/characters", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(character),
    });

    const resultCharacter = await response.json();

    props.onNewCharacter(resultCharacter);
  }

  function handleChange(e: any) {
    if (character) {
      setCharacter({ ...character, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (character) {
      createCharacter(character);
      props.onHide();
    }
  }

  return (
    <>
      <Modal.Header>Create a new character</Modal.Header>
      <Modal.Body>
        <Form className="create-character-form" validated onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control onChange={handleChange} name="name" type="text" placeholder="Name" required />
          </Form.Group>
          <Form.Group>
            <Form.Control onChange={handleChange} name="gender" type="text" placeholder="Gender" required />
          </Form.Group>
          <Form.Group>
            <Form.Control onChange={handleChange} name="status" type="text" placeholder="Status" required />
          </Form.Group>
          <Form.Group>
            <Form.Control onChange={handleChange} name="species" type="text" placeholder="Species" required />
          </Form.Group>
          <Form.Group>
            <Form.Control onChange={handleChange} name="type" type="text" placeholder="Type" required />
          </Form.Group>
          <Form.Group>
            <Form.Control onChange={handleChange} name="image" type="url" placeholder="Image url" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
