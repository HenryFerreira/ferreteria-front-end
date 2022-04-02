import React from 'react';
import { useEffect, useState } from 'react';
import { URL_BASE } from '../../config';
import Productos from './ProductoList';

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
            <table class="table table table-striped">
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
                    {facturas.map((factura) => {
                        let productos = factura.productos;
                        return (
                            <tr>
                                <td>{factura.facturaID}</td>
                                <td>{factura.feche}</td>
                                <td>{factura.nombreCliente}</td>
                                <td>{factura.nombreAtendio}</td>
                                <td>
                                   <Productos productos={productos}/>
                                </td>
                                <td>{factura.precioTotal}</td>
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