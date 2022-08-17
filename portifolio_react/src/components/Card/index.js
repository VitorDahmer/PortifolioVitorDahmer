import React from 'react';
import nodeCard from '../../asset/Node.jpg';


// import { Container } from './styles';

function Card() {
  return <>
    <div className="card border border-info border-2 m-2 text-bg-dark" style={{width:'12rem'}} >
        
        <img src={nodeCard} className="card-img-top" alt="..."></img>
        <div className="card-body d-flex justify-content-center">
            <h5 className="card-title ">NodeJS</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-bg-dark">TargetTrust</li>
          <li class="list-group-item text-bg-dark">06/2022</li>
        </ul>
    </div>
  </>;
}

export default Card;