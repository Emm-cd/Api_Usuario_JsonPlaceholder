"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function EditarUsuario({ params }) {
    const { id } = params;
    const [datos, setDatos] = useState({
        nombre: "",
        usuario: "",
        password: "",
    });

    const { nombre, usuario, password } = datos;

    useEffect(() => {
        console.log(id);
        const getUsuario = async () => {
            const url = 'http://localhost:3000/buscarPorId/' + id;
            const respuesta = await axios.get(url);
            const usuario = respuesta.data;

            setDatos({
                nombre: usuario.nombre,
                usuario: usuario.usuario,
                password: usuario.password,
            });
        };
        getUsuario();
    }, [id]);

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3000/editarUsuario/' + id;
        await axios.patch(url, datos);
        location.replace("http://localhost:3001/usuarios/mostrar");
        console.log("Se actualizo");
    };

    return (
        <>
            <div className="m-0 row justify-content-center">
                <form className="col-6 mt-5" onSubmit={handleUpdate}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Actualizar Usuario</h1>
                        </div>
                        <div className="card-body">
                            <input id="nombre" placeholder="Nombre" type="text" autoFocus name="nombre" value={nombre} onChange={handleChange} className="form-control mb-3"/>
                            <input id="usuario" placeholder="Usuario" type="text" name="usuario" value={usuario} onChange={handleChange} className="form-control mb-3"/>
                            <input id="password" placeholder="Password" type="text" name="password" value={password} onChange={handleChange} className="form-control mb-3"/>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger col-12 mt-2 mb-2" type="submit">Guardar Usuario</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
