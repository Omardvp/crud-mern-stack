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

router.post('/agregarusuario', (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idUsuario: req.body.idUsuario,
  });
  nuevousuario.save()
    .then(res => {
      res.send('Usuario agregado correctamente');
    })
    .catch(error => {
      res.send(error.data);
    });

  });
  
  
  // function (err) {
  // if (!err) {
  //   res.send('Usuario agregado correctamente');
  // } else {
  //   res.send(err.data);
  // }}