import { Row, Container, Table ,Card} from "react-bootstrap"
import BarraNav from "../componentes/BarraNavegacion"
import TablaPerfil from "../componentes/TablaPerfil"


const Productos = () => {
    
    listarProductos()
    
    return (
        <>
            <BarraNav />,
            <Container style={{ width: "60%" }}>
                <Row className="justify-content-md-center">
                    <TablaPerfil />

                    <h1>Bienvenido a Productos</h1>
                    <Card body>Esta es la lista de Productos, para editar, eliminar o crear nuevos productos, de click en el boton indicado y siga las instrucciones
                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <br></br>
                    <div id="Tabla">sadsad</div>
                    </Card>
                    

                </Row>
            </Container>
        </>
    )
}



function listarProductos() {

    fetch('http://localhost:8080/api/clone/all')
        .then(response => response.json())
        .then(data => {
            console.log(data[1]);
            let tabla = document.getElementById("Tabla")
            tabla.innerHTML = ""
            var tablaLog = `<Table striped bordered hover variant="dark">
            <thead>
            <tr >
            <th>Id</th>
            <th>Marca</th>
            <th>Procesador</th>
            <th>Sistema Operativo</th>
            <th>Descripcion</th>
            <th>Memoria</th>
            <th>Disco Duro</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Fotografia</th>
            </tr>
            </thead>
            <tbody>  
`
            for (let index = 0; index < data.length; index++) {

                tablaLog += ` <tr>
                <td>${data[index].id}</td>
                <td>${data[index].brand}</td>
                <td>${data[index].procesor}</td>
                <td>${data[index].os}</td>
                <td>${data[index].description}</td>
                <td>${data[index].memory}</td>
                <td>${data[index].hardDrive}</td>
                <td>${data[index].price}</td>
                <td>${data[index].quantity}</td>
                <td>${data[index].photography}</td>
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




export default Productos