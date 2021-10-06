import React from 'react';
import CalculatorListItem from '../CalculatorListItem/CalculatorListItem';
import { motion } from 'framer-motion';
import './SideListOfComponents.css';


function SideListOfComponents() {

 const container = {
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.16,
                staggerChildren: 0.12
              }
            }
          };
          
          const item = {
            hidden: { scale: 0.8, opacity: 0, left: "-75px", },
            visible: { scale: 1, opacity: 1, left: 0, }
          };


          const calculators = {
            "0": "Loan Interest",
            "1": "Compound Interest",
            "2": "Mortgage",
            "3": "CRE Net Income",
            "4": "CRE Cap Rate",
            "5": "Income Tax | Canada",
          }


    return (
        // <div className="SideListOfComponents-main">
        <div className="SideListOfComponents-main-wrapper" >
            
            {/** 
             * <CalculatorListItem>
             * 
             * photo
             * title
             * calculator component to open/render
             * 
             * 
             * 
            */}
            
            {/* <CalculatorListItem />
            <CalculatorListItem isActive={true} />
            <CalculatorListItem /> */}

            <motion.ul
              className="SideListOfComponents-main"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.li key={index} className="item" variants={item}>
                    <CalculatorListItem isActive={index==2?true:false} calculatorTitle={calculators[index]?calculators[index]:''} />
                </motion.li>
              ))}
            </motion.ul>
        </div>
        
          
          
          
    )
}


export default SideListOfComponents;