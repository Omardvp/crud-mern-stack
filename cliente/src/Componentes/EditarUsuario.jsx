import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export const EditarUsuario = () => {
  const params = useParams()
  //Hooks
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  useEffect(()=>{
    axios.post('/api/usuario/obenerdatausuario', {idUsuario: params.idUsuario})
      .then(res =>{
        console.log(res.data[0])
        const datausuario = res.data[0]
        setNombre(datausuario.nombre)
        setEmail(datausuario.email)
        setTelefono(datausuario.telefono)
      })
  }, [])

  // Funcion editar
    function editarUsuario(){
      //Nuevo objeto para actualizar el usuario
      const actualizarusuario = {
        nombre: nombre,
        email: email,
        telefono : telefono,
        idUsuario: params.idUsuario 
      }
      //Hacer la peticion utilizando axios
      axios.post('/api/usuario/actualizausuario', actualizarusuario)
      .then(res =>{
        console.log(res.data)
        // alert(res.data)
        Swal.fire(
          'Perfecto!',
          'El usuario se edito correctamente!',
          'success'
        )
      })
      .then(err => {console.log(err)})
    }
  
  return (
    <div className='container'>
        <div className='row'> 
          <h2 className='mt-4'>Editar usuario</h2>
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
            <button onClick={editarUsuario} className='btn btn-success'>Guardar cambios</button>
          </div>
        </div>
       
    </div>
  )
}
