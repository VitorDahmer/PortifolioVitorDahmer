import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';

function Menu() {
  return <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>DEV_VD</Link>    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        <Link class="nav-link active" aria-current="page" to='/'>Home</Link> 
        <Link class="nav-link" to='/form'>Formulário</Link>
        <Link class="nav-link" to='/contact'>Contato</Link>
        <Link class="nav-link" to='/project'>Projetos</Link>
        <Link class="nav-link" to='/api'>API</Link>
        {/* <a class="nav-link disabled">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
  </>;
}

export default Menu;