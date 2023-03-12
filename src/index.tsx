import React from 'react';
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";
const ReactDOM = require('react-dom');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>
);
