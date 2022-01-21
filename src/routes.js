import React from 'react';
import {Route, Routes,} from 'react-router';
import Home from './page/home/Home';
import Login from './page/login/Login';

export default (props)  => (
   
        <Routes>
         <Route exact path='/' element={<Home/>} />  
         <Route exact path='/login' element={<Login/>} />
        </Routes>
);