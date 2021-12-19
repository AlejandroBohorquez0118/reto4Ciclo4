import { render } from "react-dom";

function perfilUsuario(){

    let id = localStorage.getItem("id")
    fetch('http://localhost:8080/api/user/'+id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tablaPerfil = document.getElementById("TablaPerfil")
            tablaPerfil.innerHTML = ""
            var tablaP = `<Table striped bordered hover variant="dark">
            <thead>
            <tr >
            <th>Identificacion</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Zona</th>
            <th>Tipo</th>
            </tr>
            </thead>
            <tbody>
            `
            

                tablaP += ` <tr>
                <td>${data.identification}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.zone}</td>
                <td>${data.type}</td>
                </tr>`
            
            tablaPerfil.innerHTML = tablaP + `</tbody></Table>`
        }
        );
    return (
        <>
            <div id="TablaPerfil"></div>

        </>
    )

}

const TablaPerfil = () =>{

    perfilUsuario()

return(

<div id="TablaPerfil"></div>

)

}
 

export default TablaPerfil;