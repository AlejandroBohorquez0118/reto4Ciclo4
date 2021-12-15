import {Button,Modal} from "react-bootstrap"
import { useState } from "react";
 

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Crear usuario
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example;