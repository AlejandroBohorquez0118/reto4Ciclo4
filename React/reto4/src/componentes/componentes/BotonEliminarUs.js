import { render } from "react-dom";
import { Button, Modal, Form, Row, Col } from "react-bootstrap"
import { useState } from "react";


function BotonEliminarUs() {
    return (

        <Button variant="secondary" onClick={ObtenerID}>
            Eliminar
        </Button>


    )
}



function EliminarUsuario(id) {
   
    var url = 'http://localhost:8080/api/user/' + id

    fetch(url, {
        method: 'DELETE'
    }).then(response => {
        return response.json()
    }).then(data =>{
        // this is the data we get after putting our data,
        console.log(data);
        alert("Usuario Eliminado");
        window.location.href="/usuarios";}
    );
}

function ObtenerID() {

    let id = document.getElementById("id").value
    
    var data
    fetch('http://localhost:8080/api/user/identification/' + id)
        .then(response => response.json(data))
        .then(data => {
            console.log("Se obtuvo el id");
            var id = data.id
            
            EliminarUsuario(id)
        }
        )


}


function EliminarUs() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Borrar usuario
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Menu Borrar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Para confirmar la eliminacion, por favor digite la identificacion del usuario que desea retirar.
                    <br></br>

                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">
                                Identificacion
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Identificaion" id="id" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <BotonEliminarUs />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EliminarUs