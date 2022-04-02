import React from 'react';
import { useState } from 'react';
import { URL_BASE } from '../../../config';

const ProductoInsert = () => {

    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [nombreProducto, setNombreProducto] = useState();
    const [celular, setCelular] = useState();
    const [documentoIdentidad, setDocumentoIdentidad] = useState();


    const registrarProducto = (e) => { //registra los clientes cuando hace click en el boton y limpia los campos
        e.preventDefault();

        if (validarDatos) {
            let request = {
                "nombre": nombre,
                "precio": precio,
                "proveedor": {
                    "nombre": nombreProducto,
                    "celular": celular,
                    "documentoIdentidad": documentoIdentidad
                }
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };

            fetch(URL_BASE + "/inventario", requestOptions)
                .then(response => response.json())
                .then((inventario) => {
                    console.log(inventario);
                });
        }
        e.target.reset();
    }


    const validarDatos = () => {
        if (nombre != undefined && precio != undefined) {
            return true;
        }
        return false;
    }


    return (
        <>
            <h1>Ingrese la información del cliente</h1>
            <form onSubmit={registrarProducto}>
                <div>
                    <input onChange={event => { setNombre(event.target.value) }} placeholder="Nombre..."></input>
                    <input onChange={event => { setPrecio(event.target.value) }} placeholder="Precio..."></input>
                    <input onChange={event => { setNombreProducto(event.target.value) }} placeholder="Nombre de Proveedor..."></input>
                    <input onChange={event => { setCelular(event.target.value) }} placeholder="Celular..."></input>
                    <input onChange={event => { setDocumentoIdentidad(event.target.value) }} placeholder="Documento de identidad..."></input>
                    <button className='btn btn-primary' type='submit'>Crear Cliente</button>
                </div>
            </form>
        </>
    )
}

export default ProductoInsert;