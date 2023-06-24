import React, { useEffect, useState } from 'react'
import { UsuarioIndividual } from './UsuarioIndividual'
import axios from 'axios'

export const ListaUsuarios = () => {
  const [datausuario, setDatausuario] = useState([])
    useEffect(()=>{
      axios.get('/api/usuario/obetenerusuarios')
      .then(res =>{
        setDatausuario(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
      }, [])

  //Mapear lista de usuario  en objeto usuario
  const listausuarios = datausuario.map(usuario =>{
    return(
      <div>
         <UsuarioIndividual usuario={usuario}/>
      </div>
    )
  })
      
  
  return (
    <div>
        <h2>Lista de usuarios</h2>
        {listausuarios}
       
    </div>
  )
}
