import React from "react";
import { Form, NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    return ( 

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div id="" className="container-fluid">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">
      <img src="/assets/logo.png" alt="Logo" class="d-inline-block align-text-top mt-4"/>
    </a>
  </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="nav" className="navbar-nav me-auto mb-2 mb-lg-0 mt-4">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/Food">FOOD</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Resturant">RESTAURANT</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/About">ABOUT</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Workwithme">WORK WITH ME</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>



    )
}
export default Navbar;