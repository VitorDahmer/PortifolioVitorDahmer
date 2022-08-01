import React from 'react';
import Elaboracao from '../../asset/1-Elaboracao.JPG'
import Figma from '../../asset/2-Figma.JPG'
import ReactJS from '../../asset/3-React.JPG'
import NodeJS from '../../asset/4-Node.JPG'
import MySQL from '../../asset/5-MySQL.JPG'

// import { Container } from './styles';

function Carousel() {
  return <>
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Elaboracao} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Figma} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={ReactJS} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={NodeJS} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={MySQL} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    </>;
}

export default Carousel;