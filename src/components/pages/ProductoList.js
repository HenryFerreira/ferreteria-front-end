import React from 'react';

const Productos = (props) => {
    //----------------------------------------------------//
    //Se devuelve el HTML de List
    return (
        <div>
            {props.productos.map((producto) => {
                return (
                    <ul>
                        <li>{producto.productoID}</li>
                        <li>{producto.nombre}</li>
                        <li>{producto.precio}</li>
                    </ul>
                )
            })}
        </div>
    );
    //----------------------------------------------------//
}

export default Productos;


