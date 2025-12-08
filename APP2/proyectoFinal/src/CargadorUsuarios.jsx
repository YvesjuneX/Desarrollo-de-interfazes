// Importas React y useState para gestionar el estado
import React, { useState } from 'react';
import Boton from './boton';
import RenderLista from './RenderLista';
// Componente principal muy sencillo
function CargadorUsuarios() {
  // Aquí vas a guardar la lista de usuarios que llega de la API
  const [usuarios, setUsuarios] = useState([]);

  // Función que se ejecuta cuando pulsas el botón
  function cargarUsuarios() {
    // Petición GET a la API en Node.js
    fetch('http://localhost:3000/api/usuarios')
      .then(res => res.json())
      .then(datos => setUsuarios(datos))
  }
  // Render del componente
  return (
    <>
      {/* Botón para cargar la información desde la API */}
      <Boton onClick={cargarUsuarios} /> 
      {/* Lista con los usuarios que has recibido */}
      <RenderLista usuarios={usuarios} />
    </>
  );
}

export default CargadorUsuarios;