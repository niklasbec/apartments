import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav">
      <Link to='/'><p className='logo'>IDEALISTA</p></Link>
      <ul>
        <Link to='/listings'><li>All Listings</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
    </div>
  );
}

export default NavBar;
