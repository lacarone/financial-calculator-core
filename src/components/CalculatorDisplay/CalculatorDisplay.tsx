import React from 'react';
import { motion } from 'framer-motion';
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
      <div alt="photo of a row of houses" className="CalculatorDisplay-cover-photo">
        <h2 className="CalculatorDisplay-cover-title">Mortgage Calculator</h2>
      </div>
    </motion.div>
  )

}


export default CalculatorDisplay;