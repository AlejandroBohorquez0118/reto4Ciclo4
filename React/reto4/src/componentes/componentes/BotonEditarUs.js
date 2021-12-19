import { render } from "react-dom";
import { Button, Modal, Form, Row, Col, Collapse, FloatingLabel} from "react-bootstrap"
import { useState } from "react";


function BotonEditarUs() {
    return (
        <Button variant="secondary" onClick={EditarUsuario}>
            Editar
        </Button>
    )
}



function EditarUsuario() {
   
    var url = 'http://localhost:8080/api/user/update'

        var id = document.getElementById("idE").value
        var identificacion = document.getElementById("IdentificacionE").value
        var nombre = document.getElementById("nombreE").value
        var fechaNacimiento = document.getElementById("fechaNacimientoE").value
        var mesaNacimiento = document.getElementById("mesNacimientoE").value
        var direccion = document.getElementById("direccionE").value
        var celular = document.getElementById("celularE").value
        var email = document.getElementById("emailE").value
        var contraseña = document.getElementById("contraseñaE").value
        var zona = document.getElementById("zonaE").value
        var tipo = document.getElementById("tipoE").value

        var data = {
            id: id,
            identification: identificacion,
            name: nombre,
            birthtDay: fechaNacimiento,
            monthBirthtDay: mesaNacimiento,
            address: direccion,
            cellPhone: celular,
            email: email,
            password: contraseña,
            zone: zona,
            type: tipo}
console.log(data)
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
    }).then(response => {
        return response.json()
    }).then(data =>{
        // this is the data we get after putting our data,
        console.log(data);
        alert("Usuario Editado");
        window.location.href="/usuarios";
    }
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
            
            

        document.getElementById("idE").value = data.id
        document.getElementById("IdentificacionE").value = data.identification
        document.getElementById("nombreE").value = data.name
        document.getElementById("fechaNacimientoE").value = data.birthtDay.toString().substring(0, 10)
        console.log(data.birthtDay.toString().substring(0, 10))
        document.getElementById("mesNacimientoE").value = data.monthBirthtDay
        document.getElementById("direccionE").value = data.address
        document.getElementById("celularE").value = data.cellPhone
        document.getElementById("emailE").value = data.email
        document.getElementById("contraseñaE").value = data.password
        document.getElementById("confirmContraseñaE").value = data.password
        document.getElementById("zonaE").value = data.zone
        document.getElementById("tipoE").value = data.type
        
        }
        )


}


function EditarUs() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Editar usuario
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Menu Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Para identificar el usuario a editar, por favor digite su identificacion y luego de en cargar datos
                    <br></br>
                    <br></br>

                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">
                                Identificacion
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Identificaion" id="id" />
                            </Col>
                            <br></br>
                            <br></br>                           
                        </Form.Group>
                        <CamposEditar />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <BotonEditarUs />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditarUs

function CamposEditar() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="secondary"
        >
          Campos a Editar
        </Button>
        &nbsp;
        <Button
          onClick={ObtenerID}
          variant="secondary"
        >
          Cargar datos
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
              <br></br>
          <FloatingLabel  label="id" className="mb-3">
            <Form.Control type="number" placeholder="Id" id="idE" />
          </FloatingLabel>

          <FloatingLabel  label="Identificacion" className="mb-3">
            <Form.Control type="text" placeholder="Identificacion" id="IdentificacionE" />
          </FloatingLabel>
          
          <FloatingLabel  label="Nombre" className="mb-3">
            <Form.Control type="text" placeholder="Nombre" id="nombreE" />
          </FloatingLabel>

          <FloatingLabel  label="FechaNacimiento" className="mb-3">
            <Form.Control type="date" placeholder="Fecha de Nacimiento" id="fechaNacimientoE" />
          </FloatingLabel>
          
          <FloatingLabel  label="Mes" className="mb-3">
            <Form.Control type="number" placeholder="Mes" id="mesNacimientoE" />
          </FloatingLabel>

          <FloatingLabel  label="Direccion" className="mb-3">
            <Form.Control type="text" placeholder="Direccion" id="direccionE" />
          </FloatingLabel>
          
          <FloatingLabel  label="Celular" className="mb-3">
            <Form.Control type="number" placeholder="Celular" id="celularE" />
          </FloatingLabel>

          <FloatingLabel  label="Email" className="mb-3">
            <Form.Control type="email" placeholder="Email" id="emailE" />
          </FloatingLabel>
          
          <FloatingLabel  label="Contraseña" className="mb-3">
            <Form.Control type="Password" placeholder="Contraseña" id="contraseñaE" />
          </FloatingLabel>

          <FloatingLabel  label="Confirmar Contraseña" className="mb-3">
            <Form.Control type="password" placeholder="Contrseña" id="confirmContraseñaE" />
          </FloatingLabel>
          
          <FloatingLabel  label="Zona" className="mb-3">
            <Form.Control type="text" placeholder="Zona" id="zonaE" />
          </FloatingLabel>

          <FloatingLabel  label="Tipo" className="mb-3">
            <Form.Control type="text" placeholder="Tipo" id="tipoE" />
          </FloatingLabel>
          </div>
        </Collapse>
      </>
    );
  }
  
