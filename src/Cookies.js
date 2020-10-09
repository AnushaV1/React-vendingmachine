import React from "react";
import cookies from "./images/cookies.jpg";
import {Link} from "react-router-dom";
const Cookies = () => {

    return (
        <div>
        <p>Get some freshly baked cookies</p>
        <p><img style={{ width: '400px', height: '400px' }} src={cookies} alt='cookies' />
        </p>
        <button>
				<Link exact to='/'>
					Back
				</Link>
			</button>
        </div>
    )
}

export default Cookies;