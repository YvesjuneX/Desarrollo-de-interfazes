import http from 'http';

// Defines un pequeño array con usuarios de ejemplo
const usuarios = [
{ id: 1, nombre: 'Jorge', apellidos: 'Izquierdo Gonzalez', urlImagen: 'FotosAlumnadoProyecto1EV/jorge.jpg', fechaNacimiento: '2000-04-19' },
{ id: 2, nombre: 'Alin Gabriel', apellidos: 'Ionescu', urlImagen: 'FotosAlumnadoProyecto1EV/alin.jpg', fechaNacimiento: '1997-11-03' },
{ id: 3, nombre: 'Emmanuel Osa', apellidos: 'Edogiawerie Idahosa', urlImagen: 'FotosAlumnadoProyecto1EV/emmanuel.jpg', fechaNacimiento: '1996-02-14' },
{ id: 4, nombre: 'Zakaria', apellidos: 'Bourahla Boudaoudi', urlImagen: 'FotosAlumnadoProyecto1EV/zakaria.jpg', fechaNacimiento: '1999-08-09' },
{ id: 5, nombre: 'Sergio Antonio', apellidos: 'Gascon Lopez', urlImagen: 'FotosAlumnadoProyecto1EV/sergio.jpg', fechaNacimiento: '1995-12-04' },
{ id: 6, nombre: 'Claudiu Florin', apellidos: 'Toma', urlImagen: 'FotosAlumnadoProyecto1EV/claudiu.jpg', fechaNacimiento: '1998-01-27' },
{ id: 7, nombre: 'Jose', apellidos: 'Bernal Badules', urlImagen: 'FotosAlumnadoProyecto1EV/jose.jpg', fechaNacimiento: '2001-06-12' },
{ id: 8, nombre: 'Javier', apellidos: 'Sancho Belanche', urlImagen: 'FotosAlumnadoProyecto1EV/javier.jpg', fechaNacimiento: '1997-03-02' },
{ id: 9, nombre: 'Petrut Cosmin', apellidos: 'Stancu', urlImagen: 'FotosAlumnadoProyecto1EV/cosmin.jpg', fechaNacimiento: '1999-04-25' },
{ id: 10, nombre: 'Martin', apellidos: 'Miroslavov Marinov', urlImagen: 'FotosAlumnadoProyecto1EV/martin.jpg', fechaNacimiento: '1996-10-18' },
{ id: 11, nombre: 'Carlos', apellidos: 'Arilla Ruiz', urlImagen: 'FotosAlumnadoProyecto1EV/carlos.jpg', fechaNacimiento: '2002-02-03' },
{ id: 12, nombre: 'Irene', apellidos: 'Martinez Santolaria', urlImagen: 'FotosAlumnadoProyecto1EV/irene.jpg', fechaNacimiento: '1998-06-29' },
{ id: 13, nombre: 'David', apellidos: 'Garcia Egea', urlImagen: 'FotosAlumnadoProyecto1EV/david.jpg', fechaNacimiento: '1995-09-21' },
{ id: 14, nombre: 'Rodrigo Vladimir', apellidos: 'Alcantara Gutierrez', urlImagen: 'FotosAlumnadoProyecto1EV/rodrigo.jpg', fechaNacimiento: '2000-11-30' },
{ id: 15, nombre: 'Diego', apellidos: 'Sanchez Cano', urlImagen: 'FotosAlumnadoProyecto1EV/diego.jpg', fechaNacimiento: '1997-01-09' },
{ id: 16, nombre: 'Lorenzo', apellidos: 'Paris Palacios', urlImagen: 'FotosAlumnadoProyecto1EV/paris.jpg', fechaNacimiento: '1996-05-17' },
{ id: 17, nombre: 'Juan Sebastian', apellidos: 'Leal Garzon', urlImagen: 'FotosAlumnadoProyecto1EV/juan.jpg', fechaNacimiento: '2005-10-26' },
{ id: 18, nombre: 'Gabriel Orlando', apellidos: 'Cruz Parraga', urlImagen: 'FotosAlumnadoProyecto1EV/gabriel.jpg', fechaNacimiento: '2002-08-07' },
{ id: 19, nombre: 'Max', apellidos: 'Fittschen Anento', urlImagen: 'FotosAlumnadoProyecto1EV/max.jpg', fechaNacimiento: '2001-07-15' },
{ id: 20, nombre: 'David', apellidos: 'Casaus Perez', urlImagen: 'FotosAlumnadoProyecto1EV/david-casaus.jpg', fechaNacimiento: '1995-11-05' },
{ id: 21, nombre: 'Daniel', apellidos: 'Escuder Marinoso', urlImagen: 'FotosAlumnadoProyecto1EV/daniel.jpg', fechaNacimiento: '1998-02-22' }

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