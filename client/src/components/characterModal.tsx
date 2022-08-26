import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./characterModal.css";

import { useEffect, useState } from "react";
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
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    {
      fetch(`http://localhost:3000/api/characters/${props.character.id}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data);
        });
    }
  }, []);

  function handleChange(e: any) {
    if (character) {
      setCharacter({ ...character, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (character) {
      props.update(character);
      props.onHide();
    }
  }

  return (
    <Modal onHide={props.onHide} show aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={props.onHide}>
        <img className="modal-character-img" src={props.character.image} />
      </Modal.Header>
      <Modal.Body>
        {formIsVisible ? (
          <div className="editForm-div">
            <Form validated onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" defaultValue={props.character.name} name="name" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Gender</Form.Label>
                <Form.Control required name="gender" type="text" defaultValue={props.character.gender} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Status</Form.Label>
                <Form.Control required name="status" type="text" defaultValue={props.character.status} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Species</Form.Label>
                <Form.Control required name="species" type="text" defaultValue={props.character.species} onChange={handleChange} />
              </Form.Group>

              {props.character.type && (
                <Form.Group className="mb-2">
                  <Form.Label>Type</Form.Label>
                  <Form.Control required name="type" type="text" defaultValue={props.character.type} onChange={handleChange} />
                </Form.Group>
              )}

              <Form.Group className="mb-2">
                <Form.Label>Image url</Form.Label>
                <Form.Control name="image" type="text" defaultValue={props.character.image} onChange={handleChange} />
              </Form.Group>

              {character && (
                <Button variant="primary" type="submit">
                  Update
                </Button>
              )}
            </Form>
          </div>
        ) : (
          <div className="flex">
            <div className="modal-character-info-div">
              <div>
                <span>Name: </span>
                {props.character.name}
              </div>
              <div>
                <span>Gender: </span>
                {props.character.gender}
              </div>
              <div>
                <span>Species: </span>
                {props.character.species}
              </div>
              {props.character.type && (
                <div>
                  <span>Type: </span>
                  {props.character.type}
                </div>
              )}
              <div>
                <span>Status: </span>
                {props.character.status}
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!formIsVisible && (
          <>
            <Button className="form-button" onClick={props.delete}>
              DELETE
            </Button>
            <Button
              className="form-button"
              onClick={() => {
                setFormIsVisible(!formIsVisible);
                setCharacter(props.character);
              }}
            >
              EDIT
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
