import axios from "axios";
import Link from "next/link";

function formatName(name) {
    return name.toLowerCase().replace(/ /g, "-");
}

async function getUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await getUsuarios();
    return (
       <>
       <h1>Usuarios</h1>
       <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario, i) => (
                    <tr key={i}>
                        <td>{usuario.id}</td> 
                        <td>
                            <Link href={`/usuarios/${formatName(usuario.name)}`} className="link-offset-1">
                                {usuario.name}
                            </Link>
                        </td>
                        <td>{usuario.username}</td>
                        <td>{usuario.email}</td>
                    </tr>
                ))}
            </tbody>
       </table>
       </> 
    );
}
