import React from 'react';
// import logo from '../components/images/logo.jpg'
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
        <header>
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
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;