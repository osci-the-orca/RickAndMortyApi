import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../components/createCharacterModal.css";
import Character from "../models/characterModel";

interface Props {
  onNewCharacter: (character: Character) => void;
  onHide: () => void;
}

export default function CreateCharacterModal(props: Props) {
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
      <Modal.Header className="header-modal">
        <div>Add Character</div>
      </Modal.Header>
      <Modal.Body>
        <Form className="create-character-form" validated onSubmit={handleSubmit}>
          <Form.Group className="input">
            <Form.Label className="create-character-form-label">Name</Form.Label>
            <Form.Control className="create-character-form-input" onChange={handleChange} name="name" type="text" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="input">
            <Form.Label className="create-character-form-label">Gender</Form.Label>
            <Form.Control className="create-character-form-input" onChange={handleChange} name="gender" type="text" placeholder="Gender" required />
          </Form.Group>
          <Form.Group className="input">
            <Form.Label className="create-character-form-label">Status</Form.Label>
            <Form.Control className="create-character-form-input" onChange={handleChange} name="status" type="text" placeholder="Status" required />
          </Form.Group>
          <Form.Group className="input">
            <Form.Label className="create-character-form-label">Species</Form.Label>
            <Form.Control className="create-character-form-input" onChange={handleChange} name="species" type="text" placeholder="Species" required />
          </Form.Group>
          <Form.Group className="input">
            <Form.Label className="create-character-form-label">Type</Form.Label>
            <Form.Control className="create-character-form-input" onChange={handleChange} name="type" type="text" placeholder="Type" required />
          </Form.Group>
          <Form.Group className="input">
            <Form.Label className="create-character-form-label">Image url</Form.Label>
            <Form.Control className="create-character-form-input" onChange={handleChange} name="image" type="url" placeholder="Image url" />
          </Form.Group>
          <Button className="modal-add-character-btn" variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
