import React from "react"
import { Container, Row } from "react-bootstrap"
import BarraNav from "../componentes/BarraNavegacion"
import BottonLog from "../componentes/BotonLog"
import TablaPerfil from "../componentes/TablaPerfil"



const Main = () =>{

    return(
        <>
        <BarraNav />,
        <Container style={{width: "60%"}}>
            <TablaPerfil />
        <Row className="justify-content-md-center">
        
        
        <h1>Bienvenido</h1>
        </Row>
        </Container>
        </>
    )

}

export default Main

function añadirUsuario(){

    fetch('http://129.151.116.109:8080/api/user/all')
    .then(response => response.json())
    .then(data => console.log());
  
}

