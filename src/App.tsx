import React from 'react';
import {Link,Route, Routes} from 'react-router-dom'
import {Home} from './Home'
import {Register} from "./Register";
import {Login} from "./Login";

export const App = () =>
 {
  return (
      <>
      <div className="App">
      </div>
      <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/Register'} element={<Register />}/>
          <Route path={'/Login'} element={<Login />}/>
      </Routes>
      </>
  );
}


