import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Character from "../models/characterModel";

interface Props {
  onNewCharacter: (character: Character) => void;
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

    if (!resultCharacter.name) {
      console.log("funka");
    } else props.onNewCharacter(resultCharacter);
  }

  function handleChange(e: any) {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Button variant="primary" onClick={() => setShowCreateCharacter(true)}>
        Add Character
      </Button>
      <div>
        <Modal
          show={showCreateCharacter}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {
            setShowCreateCharacter(false);
          }}
        >
          <Modal.Header>Create a new character</Modal.Header>
          <Modal.Body>
            <Form validated>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="gender"
                  type="text"
                  placeholder="Gender"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="status"
                  type="text"
                  placeholder="Status"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="species"
                  type="text"
                  placeholder="Species"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="type"
                  type="text"
                  placeholder="Type"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="image"
                  type="text"
                  placeholder="Image url"
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={() => {
                  createCharacter(character);
                  setShowCreateCharacter(false);
                }}
              >
                Create
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
