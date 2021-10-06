import React from 'react';
import { motion } from 'framer-motion';
import SideMenu from '../SideMenu/SideMenu';
import MainAppDisplay from '../MainAppDisplay/MainAppDisplay';
import './MainApp.css';


function MainApp() {
  
  
  return (
    <div className="MainApp-main">
      <SideMenu />
      <MainAppDisplay />
    </div>
  )

}


export default MainApp;