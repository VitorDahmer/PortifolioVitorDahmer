import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../page/Home';
import Form from '../page/Form';
import Contact from '../page/Contact';

// import { Container } from './styles';

function RouterNavigation() {
  return <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </>;
}

export default RouterNavigation;