// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import "./navbar.css";
 import logo  from "../assets/FlyHi-Logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { IconContext } from "react-icons";

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);
//   return (
//     <>
//         <IconContext.Provider value={{ color: "#fff" }}>
//         <nav className="navbar">
//             <div className="navbar-container container">
//                 <Link to="/" className="navbar-logo" alt="logo">
//                     <a href="/"><img src={logo} alt="logo" onClick={closeMobileMenu}/></a>
//                 </Link>
                
//             </div>
//             <div className="menu-icon" onClick={handleClick}>
//                 {click ? <FaTimes /> : <FaBars />}
//             </div>
//             <ul className={click ? "nav-menu active" : "nav-menu"}>
//                 <li className="nav-item">
//                     <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu} >
//                         Home
//                     </NavLink>
//                 </li>

//                 <li className="nav-item">
//                     <NavLink to="/flight" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu} >
//                         Flight
//                     </NavLink>
//                 </li>

//                 <li className="nav-item">
//                     <NavLink to="/booking" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu} >
//                         Booking
//                     </NavLink>
//                 </li>

//                 <li className="nav-item">
//                     <NavLink to="/payments" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu} >
//                         Payments
//                     </NavLink>
//                 </li>

//                 <li className="nav-item">
//                     <NavLink to="/help" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
//                         Help
//                     </NavLink>
//                 </li>
//             </ul>
//         </nav>
//         </IconContext.Provider>  
//     </>
//   );
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to="/" className="navbar-logo" alt="logo">
            <a href="/"><img src={logo} alt="logo" onClick={closeMobileMenu}/></a>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/flight' className='nav-links' onClick={closeMobileMenu}>
              Flight <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>
              Booking
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/payments' className='nav-links'onClick={closeMobileMenu}>
              Payments
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link to='/help' className='nav-links-mobile' onClick={closeMobileMenu}>
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;