import { ReactElement } from 'react';
import Search from '../search/Search';
import Logo from '../logo/Logo';
import './Navbar.scss'

const Navbar = (): ReactElement => {
  return ( 
    <div className="navbar">
      <div className='navbar__container'>
        <Logo />
        <Search />
        <div></div>
      </div>
    </div> 
  );
}

export default Navbar;