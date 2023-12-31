import React, { useState } from 'react'
import uniquid from 'uniqid';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export const AgregarUsuario = () => {
  //Hooks
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
 //Navigate
  const navegar = useNavigate()
  function agregarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono : telefono,
      idUsuario: uniquid() 
    }
    console.log(usuario)
    axios.post('/api/usuario/agregarusuario', usuario)
    .then(res =>{
      // console.log(res.data)
      // alert(res.data)
      Swal.fire(
        'Perfecto!',
        'El usuario se creo correctamente!',
        'success'
      )
      console.log(res)
      // navegar(0)
    })
    .then(err => {console.log(err)})
  }

  return (
    <div className='container'>
        <div className='row'> 
          <h2 className='mt-4'>Agregar usuario</h2>
        </div>
        <div className='row'>          
          <div className='col-sm-6 offset-3'>
            <div className='mb-3'>
              <label htmlFor='nombre' className='form-label'>Nombre</label>
              <input type='text' className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type='email' className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='telefono' className='form-label'>Telefono</label>
              <input type='text' className='form-control' value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
            </div>
            <button onClick={agregarUsuario} className='btn btn-success'>Guardar usuario</button>
          </div>
        </div>
       
    </div>
  )
}


