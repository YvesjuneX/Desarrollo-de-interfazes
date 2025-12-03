// Importas React y useState para gestionar el estado
import React, { useState } from 'react';

// Componente principal muy sencillo
function Usuarios() {
  // Aquí vas a guardar la lista de usuarios que llega de la API
  const [usuarios, setUsuarios] = useState([]);

  // Función que se ejecuta cuando pulsas el botón
  function cargarUsuarios() {
    // Petición GET a la API en Node.js
    fetch('http://localhost:3000/api/usuarios')
      .then(res => res.json())
      .then(datos => setUsuarios(datos));
  }

  // Render del componente
  return (
    <div>
      <h2>Listado de usuarios</h2>

      {/* Botón para cargar la información desde la API */}
      <button onClick={cargarUsuarios}>
        Mostrar usuarios
      </button>

      {/* Lista con los usuarios que has recibido */}
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>
            <img src={u.urlImagen} alt={u.nombre} width="50" />
            {u.nombre} {u.apellidos} - {u.fechaNacimiento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
