import { Button } from "react-bootstrap"
import { React, Component } from "react"
import { Redirect, Navigate, useHref, useNavigate } from "react-router-dom";
import { render } from "react-dom";




//class ButtonBuscar extends React.Component {

const BuscarUsuario = () => {
    var usuario = document.getElementById("usuarioLog").value;
    var contraseña = document.getElementById("contraseñaLog").value;
    var data;
    console.log("1" + usuario, contraseña);
    navi()
    function navi() {
        console.log(usuario, contraseña);
        fetch('http://localhost:8080/api/user/' + usuario + '/' + contraseña)
            .then(response => response.json(data))
            .then(data => {
                console.log(data);
                if (data.id == null) { alert("Error al identificarse") }
                else {
                    alert("Bienvenido");
                    localStorage.setItem("id",data.id)
                    window.location.href="/main"
                    
                }
            })

    }

}



export default BotonLog;


function BotonLog() {
    return (

        <Button variant="secondary" onClick={BuscarUsuario}>
            Ingresar
        </Button>


    )
}
