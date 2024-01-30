import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCats from '../../pages/AllCats/AllCats';
import Header from '../Header/Header';

const App: FC = () => {
  return (
    <Router>
      <Header />
    <div>
      <Routes>
        <Route path="/" element={<AllCats />} />
      </Routes>
    </div>
  </Router>
  )
};

export default App;