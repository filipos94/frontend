import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
    <>
    <h1>Welcome</h1>
    <Link to={'./Register'}>Register</Link>
    <p> or </p>
    <Link to={'./Login'}>Login</Link>
    </>
)
}

export {Home}