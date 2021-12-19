import { Button } from "react-bootstrap"
import { Component } from "react";



class ButtonCrear extends Component {
    FormCreaUs() {
        var id = document.getElementById("id").value
        var identificacion = document.getElementById("Identificacion").value
        var nombre = document.getElementById("nombre").value
        var fechaNacimiento = document.getElementById("fechaNacimiento").value
        var mesaNacimiento = document.getElementById("mesNacimiento").value
        var direccion = document.getElementById("direccion").value
        var celular = document.getElementById("celular").value
        var email = document.getElementById("email").value
        var contraseña = document.getElementById("contraseña").value
        var zona = document.getElementById("zona").value
        var tipo = document.getElementById("tipo").value

        console.log(identificacion);
        var url = 'http://localhost:8080/api/user/new';
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
            type: tipo
        };
        console.log(data)
        return (



            fetch('http://localhost:8080/api/user/new', {
                method: 'POST', // or 'PUT'
                mode: 'cors',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    console.log('Success:', response);
                    alert("Se creo Satisfactiriamente el nuevo usuario")
                    window.location.reload()

                    
                })
        );

    }
    render() {

        return <Button variant="secondary" onClick={this.FormCreaUs}>Crear Usuario</Button>

    }
}

export default ButtonCrear