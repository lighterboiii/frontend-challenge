import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: FC = () => {
  return (
    <div className='header'>
      <Link to='/' className='header__link'>Все котики</Link>
      <Link to='/favourites' className='header__link'>Любимые котики</Link>
    </div>
  )
};

export default Header;