import React from 'react';
import {Link} from 'react-router-dom';

function Register() {
    return(
        <>
        <div>
            <h1>Hello please register.</h1>
            <h2>Or go to <Link to={'/Login'}>Login</Link></h2>
            <h2><Link to={'/'}>Home</Link></h2>
        </div>
        </>
    )
};

export {Register};