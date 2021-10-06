import React from 'react';
import { motion } from 'framer-motion';
import './NavbarHeader.css';
import logo from './assets/logo-xl-transparent-v1.0.png';


function NavbarHeader() {
  
  
  return (
    <div className="NavbarHeader-main">
      <img src={logo} alt="simple finance logo" className="NavbarHeader-logo" />
    </div>
  )

}


export default NavbarHeader;