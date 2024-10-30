"use client"
import Link from "next/link";
import axios from "axios";


export default function CancelarVenta({id}){
    //console.log(id);
    async function cancelar() {
        //console.log("Estas en borrar");
        const url = "http://localhost:3000/ventas/ventaCancelada/"+id;
        const respuesta = await axios.patch(url);
        window.location.replace("/ventas/mostrar");
        
    }

    
    return(
        <Link href="" onClick={cancelar} className="btn btn-danger">Cancelar</Link>
        
    );
}