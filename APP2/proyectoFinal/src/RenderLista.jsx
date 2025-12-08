import './App.css'
export default function RenderLista({ usuarios }) {
  return (
    <div className="lista-container">
      {usuarios.map((u) => (
        <div key={u.id} className="card">
          <img className="card-img" src={u.urlImagen} alt={u.nombre} />
          <div className="card-info">
            <h3>{u.nombre} {u.apellidos}</h3>
            <p><strong>Fecha de nacimiento:</strong> {u.fechaNacimiento}</p>
          </div>
        </div>
      ))}
    </div>
  );
}