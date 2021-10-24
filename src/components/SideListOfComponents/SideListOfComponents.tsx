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


          const calculators: any = {
            "0": "Loan Interest",
            "1": "Compound Interest",
            "2": "Mortgage",
            "3": "CRE Net Income",
            "4": "CRE Cap Rate",
            "5": "Income Tax | Canada",
          }

          interface CalculatorApp {
            id: string,
            name: string,
            title: string,
            iconName: string,
          }

          const calculatorApps: Array<CalculatorApp> = [
            {
              id: '0',
              name: 'loan-interest-app',
              title: 'Loan Interest',
              iconName: 'iconLoanInterest',
            },
            {
              id: '1',
              name: 'compound-interest-app',
              title: 'Compound Interest',
              iconName: 'iconCompoundInterest',
            },
            {
              id: '2',
              name: 'mortgage-app',
              title: 'Mortgage',
              iconName: 'iconMortgage',
            },
            {
              id: '3',
              name: 'cre-noi-app',
              title: 'CRE Net Income',
              iconName: 'iconCRENetIncome',
            },
            {
              id: '4',
              name: 'cre-cap-rate-app',
              title: 'CRE Cap Rate',
              iconName: 'iconCRECapRate',
            },
          ]


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
              {calculatorApps.map((app) => (
                <motion.li key={app.id} className="item" variants={item}>
                    <CalculatorListItem 
                      isActive={app.id==='2'?true:false} 
                      calculatorName={app.name?app.name:'404'} 
                      calculatorTitle={app.title?app.title:'[404: error loading calculator]'} 
                      calculatorIcon={app.iconName?app.iconName:'404'} 
                    />
                </motion.li>
              ))}
            </motion.ul>
        </div>
        
          
          
          
    )
}



export default SideListOfComponents;