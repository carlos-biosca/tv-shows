import './Navbar.scss'

import Search from '../search/Search';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className='navbar__container'>
        <a href='/' className='navbar__logo'>TMDb</a>
        <Search />
        <div></div>
      </div>
    </div> 
  );
}

export default Navbar;