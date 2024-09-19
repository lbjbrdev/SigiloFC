import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './screens/Home';
import { Artist } from './screens/Artist';


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:name" element={<Artist />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;