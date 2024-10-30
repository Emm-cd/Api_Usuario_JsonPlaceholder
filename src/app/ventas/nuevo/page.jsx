"use client"
import axios from "axios";

async function nuevaVenta(e){
    e.preventDefault();
    console.log("Estas en Nueva Venta");
    const url="http://localhost:3000/ventas/nuevaVenta";
    const datos={
        cantidad: document.getElementById("cantidad").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        status: document.getElementById("status").value,
        usuario: document.getElementById("usuario").value,
        producto: document.getElementById("producto").value
    }
    console.log(datos.data);
    const respuesta = await axios.post(url, datos);
    location.replace("http://localhost:3001/ventas/mostrar");
    
}

export default function Nuevo(){
    return(
        <>
        <div className="m-0 row justify-content-center">
        <form className="col-6 mt-5" onSubmit={nuevaVenta} action="" method="post">
        <div className="card">
            <div className="card-header">
                <h1>Nuevo Venta</h1>
            </div>
            <div className="card-body"></div>
                <input id="cantidad" placeholder="Cantidad" className="form-control mb-3"type="text" />
                <input id="fecha" placeholder="Fecha" className="form-control mb-3"type="text" />
                <input id="hora" placeholder="Hora" className="form-control mb-3"type="text" />
                <input id="status" placeholder="Status" className="form-control mb-3"type="text" />
                <input id="usuario" placeholder="Usuario" autoFocus className="form-control mb-3"type="text" />
                <input id="producto" placeholder="Producto" className="form-control mb-3"type="text" />
            <div className="card-footer">
                <button className="btn btn-danger col-12 mt-2 mb-2" type="submit">Guardar Venta</button>
            </div>
            </div>
            </form>
        </div>
        </>
    )
}