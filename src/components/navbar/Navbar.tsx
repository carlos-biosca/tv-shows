import './Navbar.scss'

import Search from '../search/Search';
import Logo from '../logo/Logo';

const Navbar = () => {
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