import React from 'react';
import { useEffect, useState } from 'react';
import { URL_BASE } from '../../config';

const ListarFacturas = () => {
    const [facturas, setFacturas] = useState([]);

    useEffect(() => {
        cargarFacturas();

    }, []);

    const cargarFacturas = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(URL_BASE + "/factura", requestOptions)
            .then(response => response.json())
            .then((p) => {
                setFacturas(p);
            });
    }

    //----------------------------------------------------//
    //Se devuelve el HTML de List
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Nombre Cliente</th>
                        <th>Nombre de quien Atiende</th>
                        <th>Productos</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {facturas.map((facturas) => {
                        return (
                            <tr>
                                <td>{facturas.facturaID}</td>
                                <td>{facturas.feche}</td>
                                <td>{facturas.nombreCliente}</td>
                                <td>{facturas.nombreAtendio}</td>
                                <td>
                                    <ul>
                                        <li>{facturas.productos.productoID}</li>
                                        <li>{facturas.productos.nombre}</li>
                                        <li>{facturas.productos.precio}</li>                                        
                                    </ul>
                                </td>
                                <td>{facturas.precioTotal}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
    //----------------------------------------------------//
}

export default ListarFacturas;