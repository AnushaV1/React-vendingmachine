import React from "react";
import {Link} from "react-router-dom";
import soda from "./images/soda.jpg";
const Soda = () => {

    return (
        <div>
        <p>Take your favorite soda. That's too much sugar !!! </p>
        <p><img style={{ width: '400px', height: '400px' }} src={soda} alt='soda' />
        </p>
        <button>
				<Link exact to='/'>
					Back
				</Link>
			</button>
        </div>
    )
}

export default Soda;