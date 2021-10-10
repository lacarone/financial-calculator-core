import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ButtonText from '../CoreUI/ButtonText/ButtonText';
import './CalculatorDisplay.css';



function CalculatorDisplay() {
  
  
  return (
    <motion.div 
      className="CalculatorDisplay-main"
      initial={{ scale: 0.85, opacity: 0.0, offset: "295px", }}
      animate={{ scale: 1, opacity: 1, offset: 0, }}
      transition={{
          type: "spring",
          stiffness: 460,
          damping: 60,
          delay: 0.72,
      }}
      >
      <div className="CalculatorDisplay-cover-photo">
        <h2 className="CalculatorDisplay-cover-title">Mortgage Calculator 
        </h2>
        <button className="CalculatorDisplay-cover-close-button App-icon-button-core-compact-square App-button-glass-dark-light">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className="CalculatorDisplay-application-box">
        {/* <button className="App-button-core App-button-green-main">Github</button> */}
        <ButtonText buttonText="Github" />
        <ButtonText buttonText="Github" colorTheme="transparent-dark" />

      </div>
      {/* <button className="App-button-core-compact-square App-button-glass-dark-light">X</button> */}
    </motion.div>
  )

}


export default CalculatorDisplay;