import Schedule from './pages/Schedule';
import React from 'react';
// import { Header } from '@core/components';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contacts from './pages/Contacts';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  );
};

export default AppRouter;
