import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Character from "../models/characterModel";

interface Props {
  character: Character;
  onHide: () => void;
  delete: () => void;
  update: (character: Character) => void;
}

export default function CharacterModal(props: Props) {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [character, setCharacter] = useState(props.character);

  function handleChange(e: any) {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  }

  return (
    <Modal
      show
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>{props.character.name}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formIsVisible ? (
          <div className="editForm-div">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={props.character.name}
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  name="gender"
                  type="text"
                  defaultValue={props.character.gender}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  name="status"
                  type="text"
                  defaultValue={props.character.status}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Species</Form.Label>
                <Form.Control
                  name="species"
                  type="text"
                  defaultValue={props.character.species}
                  onChange={handleChange}
                />
              </Form.Group>

              {props.character.type && (
                <Form.Group className="mb-2">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    name="type"
                    type="text"
                    defaultValue={props.character.type}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-2">
                <Form.Label>Image url</Form.Label>
                <Form.Control
                  name="image"
                  type="text"
                  defaultValue={props.character.image}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" onClick={() => props.update(character)}>
                Update
              </Button>
            </Form>
          </div>
        ) : (
          <>
            <h2>{props.character.gender}</h2>
            <h2>{props.character.species}</h2>
            <h2>{props.character.type}</h2>
            <h2>{props.character.status}</h2>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>CLOSE</Button>
        {!formIsVisible && <Button onClick={props.delete}>DELETE</Button>}
        {/* TODO: toggle bool, show form, in form submit button */}
        <Button onClick={() => setFormIsVisible(!formIsVisible)}>EDIT</Button>
      </Modal.Footer>
    </Modal>
  );
}
