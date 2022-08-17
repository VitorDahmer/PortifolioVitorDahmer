import React from 'react';
import Card from '../Card';
import CourseMenu from '../CourseMenu';
import Pagination from '../Pagination';

// import { Container } from './styles';

function Courses() {
  return <>
    <div className='container border border-info m-1 border-2 rounded col-12'>
        <h3 className='text-info'>Cursos e Conhecimentos</h3>
        <CourseMenu/>
        <div className='container px-3 mb-3 d-flex justify-content-around flex-wrap'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>  
         
        </div>
        <Pagination/>
    </div>    
 
    
  </>;
}

export default Courses;