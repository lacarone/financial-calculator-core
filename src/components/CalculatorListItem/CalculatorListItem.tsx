import React from 'react';
import { motion } from 'framer-motion';
import './CalculatorListItem.css';

//all images, to save time all imported manually 
import iconLoanInterest from './assets/iconLoanInterest-64.png';
import iconCompoundInterest from './assets/iconCompoundInterest-64.png';
import iconMortgage from './assets/iconMortgage-64.png';
import iconCRENetIncome from './assets/iconCRENetIncome-64.png';
import iconCRECapRate from './assets/iconCRECapRate-64.png';
import iconPlaceholderCalculatorApp from './assets/iconLoanInterest-128.png';


function CalculatorListItem(props: any) {


    let iconImg: any;



    if (props.calculatorIcon === "iconLoanInterest") {
        iconImg = iconLoanInterest;
    }
    else if (props.calculatorIcon === "iconCompoundInterest") {
        iconImg = iconCompoundInterest;
    }
    else if (props.calculatorIcon === "iconMortgage") {
        iconImg = iconMortgage;
    }
    else if (props.calculatorIcon === "iconCRENetIncome") {
        iconImg = iconCRENetIncome;
    }
    else if (props.calculatorIcon === "iconCRECapRate") {
        iconImg = iconCRECapRate;
    }
    else {
        iconImg = iconPlaceholderCalculatorApp; 
    }

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
                <div className="CalculatorListItem-image-box">
                    <img src={iconImg} alt="calculator icon" className="CalculatorListItem-image" />
                </div>
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