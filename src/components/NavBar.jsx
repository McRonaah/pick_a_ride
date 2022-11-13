import React from 'react';
import '../CSS/navBar.css';
import gif from '../components/images/7308528.gif'
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu className='navList'>
        <header className='nav'>
          <div >
          <img src={gif} alt ="gif" className='gif-container'/>
          </div>
        <div className="topicon">
				<h1>PickaRide</h1>
			  </div>
        {/* <div className="container container-flex">
            <div className="logoContainer">
                <img src={logo} alt ="logo" className='logo'/>
            </div>
        </div> */}
        </header>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/components/About'>
            About Us
          </NavLink>
          <NavLink to='/components/Contact'>
            Contact Us
          </NavLink>
          <NavLink to='/components/Cars'>
            Cars
          </NavLink>
          <NavLink to='/components/Login'>
           Login
          </NavLink>
          <NavLink to='/components/Register'>
            Register
          </NavLink>
          <i className="topsearch icon fa-solid fa-magnifying-glass"></i>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;