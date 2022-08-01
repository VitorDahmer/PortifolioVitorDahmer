import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter} from 'react-router-dom'
import RouterNavigation from "./router";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <RouterNavigation/>
    </BrowserRouter>
  );
}

export default App;
