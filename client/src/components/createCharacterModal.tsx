import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Character from "../models/characterModel";

export default function CreateCharacterModal() {
  const [showCreateCharacter, setShowCreateCharacter] = useState(false);
  const [character, setCharacter] = useState({} as Character);

  function createCharacter(character: Character) {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(character),
    });
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
          onHide={() => setShowCreateCharacter(false)}
        >
          <Modal.Header>Create a new character</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="gender"
                  type="text"
                  placeholder="Gender"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="status"
                  type="text"
                  placeholder="Status"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="species"
                  type="text"
                  placeholder="Species"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="type"
                  type="text"
                  placeholder="Type"
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
                onClick={() => createCharacter(character)}
              >
                Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
