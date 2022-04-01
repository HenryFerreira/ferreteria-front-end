import React from 'react';
import { useState } from 'react';
import { URL_BASE } from '../../../config';

const ClienteInsert = () => {

    const [nombre, setNombre] = useState();
    const [celular, setCelular] = useState();
    const [ci, setCI] = useState();


    const registrarCliente = (e) => { //registra los clientes cuando hace click en el boton y limpia los campos
        e.preventDefault();

        if (validarDatos) {
            let request = {
                "nombre": nombre,
                "celular": celular,
                "documentoIdentidad": ci
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };

            fetch(URL_BASE + "/cliente", requestOptions)
                .then(response => response.json())
                .then((cliente) => {
                    console.log(cliente);
                });
        }
        e.target.reset();
    }


    const validarDatos = () => {
        if (nombre != undefined && celular != undefined && ci != undefined) {
            return true;
        }
        return false;
    }


    return (<>
        <h1>Ingrese la información del cliente</h1>
        <form onSubmit={registrarCliente}>
            <div>
                <input onChange={event => { setNombre(event.target.value) }} placeholder="Nombre..."></input>
                <input onChange={event => { setCelular(event.target.value) }} placeholder="Celular..."></input>
                <input onChange={event => { setCI(event.target.value) }} placeholder="Documento de identidad..."></input>
                <button className='btn btn-primary' type='submit'>Crear Cliente</button>
            </div>
        </form>
    </>)
}

export default ClienteInsert;