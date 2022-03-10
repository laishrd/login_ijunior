import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import TodosJogos from './TodosJogos' 
import Principal from './Principal'

ReactDOM.render(
  <BrowserRouter>
    <Principal/>
  </BrowserRouter>,
  document.getElementById('root')
);


