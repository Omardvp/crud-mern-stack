import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


export const UsuarioIndividual = ({usuario}) => {
  const navegar = useNavigate()
  // Funcion para borrar usuario
  function borrarusuario(idUsuario){
    axios.post('/api/usuario/borrarusuario', {idUsuario: idUsuario})
      .then(res =>{
        console.log(res.data)
        // alert(res.data)
        Swal.fire(
          'Perfecto!',
          'El usuario se borro correctamente!',
          'success'
        )
        navegar(0)
      })
      .catch(err =>{
        console.log(err.data)
      })
  }  
  
  return (
    <div className='container'>
        <div className='row'>
          
          <div className='col-sm-6 offset-3'>
              <ul className='list-group'>
              <li className='list-group-item'>ID: {usuario.idUsuario}</li>
              <li className='list-group-item'>Nombre: {usuario.nombre}</li>
              <li className='list-group-item'>E-mail: {usuario.email}</li>
              <li className='list-group-item'>Tel: {usuario.telefono}</li>
            </ul> 
            
            <Link to={`/editarusuario/${usuario.idUsuario}`}><li className='btn btn-success'>Editar</li></Link>
            &nbsp;
            <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idUsuario)}}>Borrar</button>
            <hr className='mt-4'></hr>
          </div>
        
       </div>
    </div>
  )
}
