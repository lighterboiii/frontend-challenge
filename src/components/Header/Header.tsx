import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <div>
      <Link to='/'>Все котики</Link>
      <Link to='/favourites'>Любимые котики</Link>
    </div>
  )
};

export default Header;