import React, {useState} from "react";
import chips from "./images/chips.jpg";
import {Link} from "react-router-dom";
const Chips = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
        <p>Have a bag of chips</p>
        <p><img style={{ width: '400px', height: '400px' }} src={chips} alt='chips' />
        </p>
        <button>
				<Link exact to='/'>
					Back
				</Link>
			</button>
        <p>Bags eaten: {count}</p> 
        <button onClick={addCount}>Add one</button>
        </div>
    )
}

export default Chips;