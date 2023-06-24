import './App.css';
import { AgregarUsuario } from './Componentes/AgregarUsuario';
import { EditarUsuario } from './Componentes/EditarUsuario';
import { ListaUsuarios } from './Componentes/ListaUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  return (
    <div className="App">
     <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand" href="/">Crud MERN Stack 2023</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="agregarusuario">Agregar usuario</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaUsuarios />}/>
        <Route path='/agregarusuario' element={<AgregarUsuario />}/>
        <Route path='/editarusuario/:idUsuario' element={<EditarUsuario />}/>
      </Routes>
     </BrowserRouter>
     
     
    </div>
  );
}

export default App;
