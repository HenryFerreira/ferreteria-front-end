import React from 'react';
import { useEffect, useState } from 'react';
import { URL_BASE } from '../../config';

const ListarProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarFacturas();

    }, []);

    const cargarFacturas = () => {
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

    //----------------------------------------------------//
    //Se devuelve el HTML de List
    return (
        <div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Proveedor</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => {
                        return (
                            <tr>
                                <td>{producto.productoID}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <ul>
                                        <li>{producto.proveedor.nombre}</li>
                                        <li>{producto.proveedor.celular}</li>
                                        <li>{producto.proveedor.documentoIdentidad}</li>                                        
                                    </ul>
                                </td>
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