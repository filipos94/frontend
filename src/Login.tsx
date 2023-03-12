import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return(
    <>
        <div>
            <h1>Hello, please login in.</h1>
            <h2>Or <Link to={'/Register'}>register</Link></h2>
            <h2><Link to={'/'}>Home</Link></h2>
        </div>
    </>
    )
}

export {Login}