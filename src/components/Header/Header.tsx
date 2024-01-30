import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='header__links'>
        <Link to='/' className='header__link'>Все котики</Link>
        <Link to='/favourites' className='header__link'>Любимые котики</Link>
      </div>
    </div>
  )
};

export default Header;