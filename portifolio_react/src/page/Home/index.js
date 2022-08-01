import React from 'react';
import Carousel from '../../components/Carousel';

// import { Container } from './styles';

function Home() {
  return (<>
    <div className="container p-3 mb-2 bg-dark text-white">
      <Carousel/>
   
      <h1>Apresentação</h1>
      <h1>Cursos</h1>
    </div>    
  </>);
}

export default Home;