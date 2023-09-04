import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Input } from './input/input';
import { Pricing } from './pricing/pricing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/input' element={<Input/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


