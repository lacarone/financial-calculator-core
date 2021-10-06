import React from 'react';
import { motion } from 'framer-motion';
import './CalculatorListItem.css';


function CalculatorListItem(props: any) {


    return (
        <motion.div 
            className={`
                CalculatorListItem-main 
                util-box-shadow-3d 
                ${props.isActive ? 'CalculatorListItem-main-state-active' : ''}
            `}
            initial={{ scale: 0.8, opacity: 0, left: "-75px", }}
            animate={{ scale: 1, opacity: 1, left: 0, }}
            transition={{
                type: "spring",
                stiffness: 660,
                damping: 30,
                delay: 0.06,
            }}
        >
            <div className="CalculatorListItem-content-flex-wrapper">
                <div className="CalculatorListItem-image-box"></div>
                <div className="CalculatorListItem-title-box">
                    <div className="CalculatorListItem-title">{props.calculatorTitle ? props.calculatorTitle : 'Oops, Calculator without a name!'}</div>
                </div>


            </div>

            {
                props.isActive ? <div className="CalculatorListItem-state-active"></div> : ''
            }
            
        </motion.div>
    )
}


export default CalculatorListItem;