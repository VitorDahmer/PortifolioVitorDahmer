import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';

function Menu() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>DEV_VD</Link>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <Link className="nav-link active" aria-current="page" to='/'>Home</Link> 
        <Link className="nav-link" to='/form'>Formulário</Link>
        <Link className="nav-link" to='/contact'>Contato</Link>
        <Link className="nav-link" to='/project'>Projetos</Link>
        <Link className="nav-link" to='/api'>API</Link>
        {/* <a class="nav-link disabled">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
  </>;
}

export default Menu;