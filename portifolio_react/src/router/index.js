import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../page/Home';

// import { Container } from './styles';

function RouterNavigation() {
  return <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  </>;
}

export default RouterNavigation;