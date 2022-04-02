import React from 'react';
import { useState, useEffect } from 'react';
import { URL_BASE } from '../../../config';

const FacturaInsert = () => {


    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarClientes();

    }, []);

    const cargarClientes = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(URL_BASE + "/inventario", requestOptions)
            .then(response => response.json())
            .then((p) => {
                setProductos(p);
            });
    }


    const [feche, setFecha] = useState();
    const [nombreCliente, setNombreCliente] = useState();
    const [nombreAtendio, setNombreAtiendio] = useState();


    const registrarFactura = (e) => { //registra los clientes cuando hace click en el boton y limpia los campos
        e.preventDefault();


        let request = {
            "feche": feche,
            "nombreCliente": nombreCliente,
            "nombreAtendio": nombreAtendio,
            "productos": [],
            "precioTotal": 0
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };

        fetch(URL_BASE + "/factura", requestOptions)
            .then(response => response.json())
            .then((factura) => {
                console.log(factura);
            });

        e.target.reset();
    }
    
    return (
        <>

            <div class="container">
                <div class="row">
                    <div class="col">
                        {productos.map((producto) => {
                            return (
                                <tr>
                                    <ul>
                                        <li>{producto.productoID}</li>
                                        <li>{producto.nombre}</li>
                                        <li>{producto.precio}</li>
                                    </ul>
                                </tr>
                            );
                        })}
                    </div>
                    <div class="col">
                        <form onSubmit={registrarFactura}>
                            <div>
                                <input onChange={event => { setFecha(event.target.value) }} placeholder="Fecha..."></input>
                                <input onChange={event => { setNombreCliente(event.target.value) }} placeholder="Nombre del cliente..."></input>
                                <input onChange={event => { setNombreAtiendio(event.target.value) }} placeholder="Nombre de quien atiende..."></input>
                                <button className='btn btn-primary' type='submit'>Crear Cliente</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default FacturaInsert;