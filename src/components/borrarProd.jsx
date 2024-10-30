"use client"
import Link from "next/link";
import axios from "axios";


export default function BorrarProducto({id}){
    //console.log(id);
    async function borrar() {
        //console.log("Estas en borrar");
        const url = "http://localhost:3000/productos/borrarProducto/"+id;
        const respuesta = await axios.delete(url);
        window.location.replace("/productos/mostrar");
        
    }

    
    return(
        <Link href="" onClick={borrar} className="btn btn-danger">Borrar</Link>
        
    );
}