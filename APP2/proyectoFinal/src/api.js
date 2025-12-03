import http from 'http';

// Defines un pequeño array con usuarios de ejemplo
const usuarios = [
  { id: 1, nombre: 'Juan',  apellidos: 'Leal Garzon', urlImagen: 'https://randomuser.me/api/portraits/men/1.jpg',   fechaNacimiento: '1990-05-15' },
  { id: 2, nombre: 'David', apellidos: 'Place Holder', urlImagen: 'https://randomuser.me/api/portraits/women/2.jpg', fechaNacimiento: '1985-10-30' }
  { id: 2, nombre: 'Irene', apellidos: 'Gómez', urlImagen: 'https://randomuser.me/api/portraits/women/2.jpg', fechaNacimiento: '1985-10-30' }
  { id: 2, nombre: 'Jorge', apellidos: 'Gómez', urlImagen: 'https://randomuser.me/api/portraits/women/2.jpg', fechaNacimiento: '1985-10-30' }

];

// Crea el servidor HTTP con soporte básico para CORS
const server = http.createServer((req, res) => {
  // Permite las peticiones desde el frontend en el puerto 5173
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/api/usuarios') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(usuarios));
  } else {
    res.writeHead(404);
    res.end('No encontrado');
  }
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor API muy sencillo en http://localhost:3000');
});