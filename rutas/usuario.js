const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquemaUsuario = new Schema({
  nombre: String,
  email: String,
  telefono: String,
  idUsuario: String,
});

const ModeloUsuario = mongoose.model('usuarios', esquemaUsuario);
module.exports = router;


// Agregar usuario
router.post('/agregarusuario', (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idUsuario: req.body.idUsuario,
  });
  nuevousuario.save()
    .then(response => {
      res.send('Usuario agregado correctamente!');
    })
    .catch(error => {
      res.send(error);
    });

  });
  
  //Callback para mongoose 6
  // nuevousuario.save(function (err) {
  // if (!err) {
  //   res.send('Usuario agregado correctamente');
  // } else {
  //   res.send(err.data);
  // }})

// Obtener todos los usuarios
router.get('/obetenerusuarios', (req,res)=>{
  ModeloUsuario.find({})
  .then(docs => {
    res.send(docs);
  })
  .catch(error => {
    res.send(error.data);
  });
})

// Obtener data de usuario
router.post('/obenerdatausuario', (req,res)=>{
  ModeloUsuario.find({idUsuario: req.body.idUsuario})
  .then(docs => {
    res.send(docs);
  })
  .catch(error => {
    res.send(error.data);
  });
})


// Actualizar usuario
router.post('/actualizausuario', (req, res) => {
  ModeloUsuario.findOneAndUpdate({idUsuario: req.body.idUsuario}, {
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono
    })
    .then(response => {
      res.send('Usuario editado correctamente!');
    })
    .catch(error => {
      res.send(error.data);
    });
  });

  // Borrar usuario
router.post('/borrarusuario', (req, res) => {
  ModeloUsuario.findOneAndDelete({idUsuario: req.body.idUsuario})
    .then(response => {
      res.send('Usuario borrado correctamente!');
    })
    .catch(error => {
      res.send(error.data);
    });
  });