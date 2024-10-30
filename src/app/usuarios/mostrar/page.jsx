import BorrarUsuario from "@/components/borrar";
import axios from "axios";
import Link from "next/link";

async function getUsuarios() {
    const url="http://localhost:3000"
    const usuarios = await axios.get(url);
    //console.log(usuarios);
    return usuarios.data;
}
//noticias();

export default async function Usuarios(){
    const usuarios = await getUsuarios();
    return(
       <>
       <h1>Usuarios</h1>
       <Link href={'/usuarios/nuevo'} className="btn btn-secondary mb-3">Agregar Usuario + </Link>
       <table className ="table">
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuario,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td> 
                            <td>{usuario.nombre}</td>
                            <td>{usuario.usuario}</td>
                            <td>
                            <Link href={'/usuarios/editar/' + usuario.id} className="btn btn-primary">Editar</Link>
                            </td>
                            <td>
                                <BorrarUsuario id={usuario.id} className="btn btn-danger"/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
       </table>
       </> 
    );
}