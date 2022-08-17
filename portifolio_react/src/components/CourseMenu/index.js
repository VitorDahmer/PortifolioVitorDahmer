import React from 'react';

// import { Container } from './styles';

function CourseMenu() {
  return <>
    <nav className="navbar bg-dark">
  <div className="container-fluid ">
    <form className="d-flex " role="search">
      <input className="form-control me-2" type="search" placeholder="Localizar" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Localizar</button>
    </form>
  </div>
</nav>
  </>;
}

export default CourseMenu;