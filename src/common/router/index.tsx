import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Images from '../../page/homePage';
const Router: React.FC = () => {
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <Routes>
          <Route path='/' element={<Images />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
