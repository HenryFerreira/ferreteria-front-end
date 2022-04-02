import React from 'react';
import { useEffect, useState } from 'react';
import { URL_BASE } from '../../config';
import Productos from './ProductoList';

const ListarProductos = () => {
    const [inventario, setInventario] = useState([]);

    useEffect(() => {
        cargarFacturas();

    }, []);

    const cargarFacturas = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(URL_BASE + "/inventarioProductos", requestOptions)
            .then(response => response.json())
            .then((p) => {
                setInventario(p);
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
                        <th>Cantidad Actual</th>
                        <th>Cantidad Máxima</th>
                        <th>Cantidad Mínima</th>
                        <th>Producto</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {inventario.map((producto) => {
                        return (
                            <tr>
                                <td>{producto.inventarioID}</td>
                                <td>{producto.cantMaxima}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.cantMinima}</td>
                                <td>
                                   <Productos productos={producto.productos}/>
                                </td>
                                <td>{producto.cantidad <= producto.cantMinima? "CASI SIN STOCK" : "STOCK"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
    //----------------------------------------------------//
}

export default ListarProductos;