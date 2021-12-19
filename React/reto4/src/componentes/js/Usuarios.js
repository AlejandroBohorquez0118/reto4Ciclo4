import { Row, Container, Card} from "react-bootstrap"
import BarraNav from "../componentes/BarraNavegacion"
import EditarUs from "../componentes/BotonEditarUs"
import EliminarUs from "../componentes/BotonEliminarUs"
import TablaPerfil from "../componentes/TablaPerfil"
import Example from "./ModalCreaUs"


const Usuarios = () => {
    
    listarUsuarios()
    
    return (
        <>
            <BarraNav />,
            <Container id = "Principal" style={{ width: "60%" }}>
                <Row className="justify-content-md-center">
                    <TablaPerfil />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h1>Bienvenido a Usuarios</h1>
                    <br></br>
                    <Card body>Esta es la lista de usuarios, para editar, eliminar o crear nuevos usuarios, de click en el boton indicado y siga las instrucciones
                    <br></br>
                    <br></br>
                    <Example />&nbsp; &nbsp; <EliminarUs />&nbsp;&nbsp; <EditarUs />
                    <br></br>
                    <br></br>
                    <div id="Tabla">sadsad</div>
                    </Card>
                    

                </Row>
            </Container>
        </>
    )
}



function listarUsuarios() {
    
    fetch('http://localhost:8080/api/user/all')
        .then(response => response.json())
        .then(data => {
            console.log("");
            
            let tabla = document.getElementById("Tabla")
            tabla.innerHTML = ""
            var tablaLog = `<Table striped bordered hover variant="dark">
            <thead>
            <tr >
            <th>Identificacion</th>
            <th>Nombre</th>
            <th>Direccion </th>
            <th>Celular</th>
            <th>Email</th>
            <th>Zona</th>
            <th>Tipo</th>
            </tr>
            </thead>
            <tbody>  
`           
            for (let index = 0; index < data.length; index++) {
                
                tablaLog += ` <tr>
                <td>${data[index].identification}</td>
                <td>${data[index].name}</td>
                <td>${data[index].address}</td>
                <td>${data[index].cellPhone}</td>
                <td>${data[index].email}</td>
                <td>${data[index].zone}</td>
                <td>${data[index].type}</td>
                </tr>`
            }
            tabla.innerHTML = tablaLog + `</tbody></Table>`
        }
        );
    return (
        <>
            <h1>Prueba</h1>

        </>
    )

}





export default Usuarios