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
        </header>
        {/* <h1>Pickaride</h1> */}
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
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
          <div class="container1">  
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-search"></i>
                </div>
              </div>
                <input type="text" placeholder="search here" class="form-control" name="search" />
            </div>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;