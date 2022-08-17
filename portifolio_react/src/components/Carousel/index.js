import React from 'react';
import Elaboracao from '../../asset/1-Elaboracao.JPG'
import Figma from '../../asset/2-Figma.JPG'
import ReactJS from '../../asset/3-React.JPG'
import NodeJS from '../../asset/4-Node.JPG'
import MySQL from '../../asset/5-MySQL.JPG'

// import { Container } from './styles';

function Carousel() {
  return <>
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Elaboracao} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Figma} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ReactJS} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={NodeJS} class="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={MySQL} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </>;
}

export default Carousel;