import React from 'react';
import {Link} from 'react-router-dom';
// import background from './Images/Background/Background.jpg'

const Ingame = () => {
    return (
        <div>
            <button><Link to='/start'><span style={{color:'white'}}>Start</span></Link></button>
        </div>
    )
}

export default Ingame
