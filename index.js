// Importar el módulo HTTP de Node.js
const http = require('http');

// Crear un servidor web
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>¡Hola Mundo desde Node.js en el navegador Con Mimi!</h1>');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});