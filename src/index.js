import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Principal from './Principal'
import Login from './Login'
import Cadastro from './Cadastro'

     

ReactDOM.render(
  <BrowserRouter>
  <Routes>
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/*' element={<Principal/>} />
        <Route path='/login' element={<Login/>} />
    </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
);


