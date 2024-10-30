import BorrarProducto from "@/components/borrarProd";
import axios from "axios";
import Link from "next/link";

async function getProductos() {
    const url="http://localhost:3000/productos"
    const productos = await axios.get(url);
    //console.log(usuarios);
    return productos.data;
}
//noticias();

export default async function Productos(){
    const productos = await getProductos();
    return(
       <>
       <h1>Productos</h1>
       <Link href={'/productos/nuevo'} className="btn btn-secondary mb-3">Agregar Producto + </Link>
       <table className ="table">
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td> 
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>
                            <Link href={'/productos/editar/' + producto.id} className="btn btn-primary">Editar</Link>
                            </td>
                            <td>
                                <BorrarProducto id={producto.id} className="btn btn-danger"/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
       </table>
       </> 
    );
}