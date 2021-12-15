import dark from '../../Imagen7.png';
import { InputGroup, Row } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "../css/Login.css"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Example from './ModalCreaUs';


function Login() {
  return (
    <>
      <Row className='justify-content-md-center'>
        <div className='col-lg-4 col-centenetworking'>

          <Card id="formulario">
            <Card.Body>
              <div className='col-lg-6' id="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </div>
              <br></br>
              <Card.Title id="titulo">Cacharrero

              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Bienvenido para iniciar ingrese su usuario y contraseña</Card.Subtitle>

              <InputGroup className="mb-6" >
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Nombre de Usuario"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <br></br>

              <InputGroup className="mb-6" >

                <InputGroup.Text id="basic-addon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg></InputGroup.Text>
                <FormControl
                  placeholder="Contraseña"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <br></br>
              <Button variant="secondary">Ingresar</Button>{' '}&nbsp;
              {<Example />}
              
            </Card.Body>
          </Card>
        </div>
      </Row>
    </>
  );
}



export default Login;
