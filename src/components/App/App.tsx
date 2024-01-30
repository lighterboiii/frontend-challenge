import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../../pages/MainPage/Main';

const App: FC = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  </Router>
  )
};

export default App;