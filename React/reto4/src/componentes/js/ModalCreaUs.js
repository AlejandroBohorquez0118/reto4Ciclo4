import { Button, Modal, FloatingLabel, Form } from "react-bootstrap"
import { useState } from "react";
import ButtonCrear from "../componentes/fetchUsuarios";



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
          <Modal.Title>Creacion de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <FloatingLabel  label="id" className="mb-3">
            <Form.Control type="number" placeholder="Id" id="id" />
          </FloatingLabel>

          <FloatingLabel  label="Identificacion" className="mb-3">
            <Form.Control type="text" placeholder="Identificacion" id="Identificacion" />
          </FloatingLabel>
          
          <FloatingLabel  label="Nombre" className="mb-3">
            <Form.Control type="text" placeholder="Nombre" id="nombre" />
          </FloatingLabel>

          <FloatingLabel  label="FechaNacimiento" className="mb-3">
            <Form.Control type="date" placeholder="Fecha de Nacimiento" id="fechaNacimiento" />
          </FloatingLabel>
          
          <FloatingLabel  label="Mes" className="mb-3">
            <Form.Control type="number" placeholder="Mes" id="mesNacimiento" />
          </FloatingLabel>

          <FloatingLabel  label="Direccion" className="mb-3">
            <Form.Control type="text" placeholder="Direccion" id="direccion" />
          </FloatingLabel>
          
          <FloatingLabel  label="Celular" className="mb-3">
            <Form.Control type="number" placeholder="Celular" id="celular" />
          </FloatingLabel>

          <FloatingLabel  label="Email" className="mb-3">
            <Form.Control type="email" placeholder="Email" id="email" />
          </FloatingLabel>
          
          <FloatingLabel  label="Contraseña" className="mb-3">
            <Form.Control type="Password" placeholder="Contraseña" id="contraseña" />
          </FloatingLabel>

          <FloatingLabel  label="Confirmar Contraseña" className="mb-3">
            <Form.Control type="password" placeholder="Contrseña" id="confirmContraseña" />
          </FloatingLabel>
          
          <FloatingLabel  label="Zona" className="mb-3">
            <Form.Control type="text" placeholder="Zona" id="zona" />
          </FloatingLabel>

          <FloatingLabel  label="Tipo" className="mb-3">
            <Form.Control type="text" placeholder="Tipo" id="tipo" />
          </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <ButtonCrear />
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;





