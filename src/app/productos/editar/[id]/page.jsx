"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function EditarProducto({ params }) {
    const { id } = params;
    const [datos, setDatos] = useState({
        nombre: "",
        precio: "",
        stock: "",
    });

    const { nombre, precio, stock } = datos;

    useEffect(() => {
        console.log(id);
        const getProducto = async () => {
            const url = 'http://localhost:3000/productos/buscarPorId/' + id;
            const respuesta = await axios.get(url);
            const producto = respuesta.data;

            setDatos({
                nombre: producto.nombre,
                precio: producto.precio,
                stock: producto.stock,
            });
        };
        getProducto();
    }, [id]);

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3000/productos/editarProducto/' + id;
        await axios.patch(url, datos);
        location.replace("http://localhost:3001/productos/mostrar");
        console.log("Se actualizo");
    };

    return (
        <>
            <div className="m-0 row justify-content-center">
                <form className="col-6 mt-5" onSubmit={handleUpdate}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Actualizar Producto</h1>
                        </div>
                        <div className="card-body">
                            <input id="nombre" placeholder="Nombre" type="text" autoFocus name="nombre" value={nombre} onChange={handleChange} className="form-control mb-3"/>
                            <input id="precio" placeholder="Precio" type="text" name="precio" value={precio} onChange={handleChange} className="form-control mb-3"/>
                            <input id="stock" placeholder="Stock" type="text" name="stock" value={stock} onChange={handleChange} className="form-control mb-3"/>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger col-12 mt-2 mb-2" type="submit">Guardar Producto</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}