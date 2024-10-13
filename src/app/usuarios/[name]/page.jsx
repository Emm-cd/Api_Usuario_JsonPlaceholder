import axios from 'axios';

function desformatea(name) {
    return name.replace(/-/g, " ");
}

export default async function Usuario({ params }) {
  const nombre = desformatea(params.name);

  const datos = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const usuario = datos.data.find(user => user.name.toLowerCase() === nombre.toLowerCase());

  if (usuario) {
    return (
      <div>
          
      <table className="table table-bordered table-striped" >
        <thead className="table-dark">
          <tr><h1>{usuario.name}</h1></tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuario:</td>
            <td>{usuario.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{usuario.email}</td>
          </tr>
          <tr>
            <td colSpan="2"><h2>Dirección</h2></td>
          </tr>
          <tr>
            <td>Calle:</td>
            <td>{usuario.address.street}</td>
          </tr>
          <tr>
            <td>Suite:</td>
            <td>{usuario.address.suite}</td>
          </tr>
          <tr>
            <td>Ciudad:</td>
            <td>{usuario.address.city}</td>
          </tr>
          <tr>
            <td>Código Postal:</td>
            <td>{usuario.address.zipcode}</td>
          </tr>
          <tr>
            <td colSpan="2"><h3>Coordenadas</h3></td>
          </tr>
          <tr>
            <td>Latitud:</td>
            <td>{usuario.address.geo.lat}</td>
          </tr>
          <tr>
            <td>Longitud:</td>
            <td>{usuario.address.geo.lng}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{usuario.phone}</td>
          </tr>
          <tr>
            <td>Sitio Web:</td>
            <td>{usuario.website}</td>
          </tr>
          <tr>
            <td colSpan="2"><h2>Compañía</h2></td>
          </tr>
          <tr>
            <td>Nombre de la Compañía:</td>
            <td>{usuario.company.name}</td>
          </tr>
          <tr>
            <td>Lema:</td>
            <td>{usuario.company.catchPhrase}</td>
          </tr>
          <tr>
            <td>Descripción:</td>
            <td>{usuario.company.bs}</td>
          </tr>
        </tbody>
      </table>
    </div>

    );
  } 

  return <div><h1>Usuario no encontrado</h1></div>;
}



