import { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCats from '../../pages/AllCats/AllCats';
import Header from '../Header/Header';
import Favourites from '../../pages/FavCats/FavCats';

const App: FC = () => {
  return (
    <div className='app'>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<AllCats />} />
            <Route path='/favourites' element={<Favourites />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
};

export default App;