import React from 'react';
import {Route, Routes,Navigate } from 'react-router';
import Home from './page/home/Home';
import Login from './page/login/Login';

export default (props)  => (
   
        <Routes>
         <Route path='/' element={<Navigate to= '/home' />} />     
         <Route path='/login' element={<Navigate to='/Login' />} />
        </Routes>
);