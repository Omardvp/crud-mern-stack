const express = require('express')
const app = express()

// Importar conexión a MongoDB
const archivoDB = require('./conexion')

// Importación del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')
app.use('/api/usuario', rutausuario);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
  });
  

//Importar body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) =>{
    res.end('¡Bienvenidos al servidor BackEnd Node en funcionamiento!')
})

// Configurar servidor básico
app.listen(5000, function() {
    console.log('El servidor está corriendo correctamente')
})


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