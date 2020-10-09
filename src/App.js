import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import VendingMachine from "./VendingMachine"
import Chips from "./Chips";
import Cookies from "./Cookies";
import Soda from "./Soda"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path="/chips">
      <Chips />
      </Route>
      <Route path="/cookies">
        <Cookies />
        </Route>
        <Route path="/soda">
        <Soda />
        </Route>
        <Route path="/">
        <VendingMachine />
        </Route>
    </Switch>
    
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;

