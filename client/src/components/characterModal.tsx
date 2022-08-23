import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Character from "../models/characterModel";

interface Props {
  character: Character;
  onHide: () => void;
}

export default function CharacterModal(props: Props) {
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
        <h2>{props.character.gender}</h2>
        <h2>{props.character.species}</h2>
        <h2>{props.character.type}</h2>
        <h2>{props.character.status}</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>CLOSE</Button>
        <Button onClick={props.onHide}>DELETE</Button>
        <Button onClick={props.onHide}>EDIT</Button>
      </Modal.Footer>
    </Modal>
  );
}
