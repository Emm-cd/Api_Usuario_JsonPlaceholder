import CancelarVenta from "@/components/cancelar";
import axios from "axios";
import Link from "next/link";

async function getVentas() {
    const url="http://localhost:3000/ventas"
    const ventas = await axios.get(url);
    //console.log(usuarios);
    return ventas.data;
}
//noticias();

export default async function Ventas(){
    const ventas = await getVentas();
    return(
       <>
       <h1>Ventas</h1>
       <Link href={'/ventas/nuevo'} className="btn btn-secondary mb-3">Agregar Venta + </Link>
       <table className ="table">
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Status</th>
                    <th>Usuario</th>
                    <th>Producto</th>
                    <th>Cancelar Venta</th>
                </tr>
            </thead>
            <tbody>
                {
                    ventas.map((venta,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td> 
                            <td>{venta.cantidad}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.hora}</td>
                            <td>{venta.status}</td>
                            <td>{venta.nombreUsuario}</td>
                            <td>{venta.nombreProducto}</td>
                            <td>
                            <CancelarVenta id={venta.id} className="btn btn-danger"/>                     
                            </td>
                        </tr>
                    ))
                }
            </tbody>
       </table>
       </> 
    );
}