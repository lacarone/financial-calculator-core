import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ButtonText from '../CoreUI/ButtonText/ButtonText';
import ButtonIcon from '../CoreUI/ButtonIcon/ButtonIcon';
import ButtonIconText from '../CoreUI/ButtonIconText/ButtonIconText';
import InputText from '../CoreUI/InputText/InputText';
import InputSlider from '../CoreUI/InputSlider/InputSlider';
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
        
        <ButtonIcon buttonIcon={faTimes} colorTheme="glass-dark" addedClasses="CalculatorDisplay-cover-close-button" />
      </div>

      <div className="CalculatorDisplay-application-box">
        {/* <button className="App-button-core App-button-green-main">Github</button> */}
        {/* <ButtonText buttonText="GitHub" />
        <ButtonText buttonText="GitHub" colorTheme="transparent-dark" /> */}

        {/* <ButtonIconText colorTheme="transparent-dark" buttonText="GitHub" buttonIcon={faCoffee} /> */}

        <InputText inputLabel="Annual Net Operating Income some more text" />
        <InputText inputLabel="Real Estate MLS Number" inputError="Please enter the MLS number" />

        <br /><br /><br />

        <InputText />

        <br /><br /><br />

        <InputSlider inputLabel="Real Estate MLS Number" inputError="Please enter the MLS number"  />

        <br /><br />
        <ButtonText buttonText="GitHub" />
        <ButtonText buttonText="GitHub" colorTheme="transparent-dark" /> 

      </div>
    </motion.div>
  )

}


export default CalculatorDisplay;