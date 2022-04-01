import React from 'react';
import { useEffect, useState } from 'react';
import { URL_BASE } from '../config';

const ListarClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        cargarFacturas();

    }, []);

    const cargarFacturas = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(URL_BASE+"/cliente", requestOptions)
            .then(response => response.json())
            .then((p) => {
                setClientes(p);
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
                        <th>Tarea</th>
                        <th>¿Completado?</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => {
                        return (
                            <tr>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.celular}</td>
                                <td>{cliente.documentoIdentidad}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
    //----------------------------------------------------//
}

export default ListarClientes;