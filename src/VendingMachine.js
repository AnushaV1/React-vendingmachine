import React from "react";
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import machine from "./images/vendingmachine.jpg";


const VendingMachine = () => {

return (
<>
<h1>Vending Machine</h1> 
<div className = "row">
    <div className="col">
    <img src={machine} alt='Vending Machine' />
    </div>
    <div className="col">
        <p>Hello! I am a vending machine. What would you like to eat?</p>
        <p>
					<Link to='/cookies'>Cookies</Link>
					</p>
					<p>
						<Link to='/chips'>Chips</Link>
					</p>
					<p>
						<Link to='/soda'>Soda</Link>
					</p>
    </div>
</div>
</>

);

}

export default VendingMachine;

