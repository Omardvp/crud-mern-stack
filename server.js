// Importa las dependencias necesarias
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Importa el archivo de rutas de usuario
const rutausuario = require('./rutas/usuario');

mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');
const objetobd = mongoose.connection;

objetobd.on('connected', () => {
  console.log('Conexión correcta a MongoDB');
});

objetobd.on('error', () => {
  console.log('Error en la conexión a MongoDB');
});

app.use(express.json());

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err); // Registra el error en la consola para referencia
  res.status(500).json({ error: 'Ocurrió un error interno' });
});

app.use('/api/usuario', rutausuario);

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor BackEnd Node Corriendo...');
});

app.listen(5000, function () {
  console.log('El servidor está corriendo correctamente');
});



// const express = require('express')
// const app = express()

// //Importar conexion a MongoDB
// const archivoDB = require('./conexion')

// //Importacion del archivo de rutas y modelo usuario
// const rutausuario = require('./rutas/usuario')

// app.use('/api/usuario',rutausuario)

// app.get('/', (req, res) =>{
//     res.end('Bienvenidos al servidor BackEnd Node Corriendo...')
// })

// //Configurar server basico
// app.listen(5000, function() {
//     console.log('El servidor esta corriendo correctamente')
// })
