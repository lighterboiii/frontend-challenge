import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../../pages/MainPage/Main';
import Header from '../Header/Header';

const App: FC = () => {
  return (
    <Router>
      <Header />
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  </Router>
  )
};

export default App;