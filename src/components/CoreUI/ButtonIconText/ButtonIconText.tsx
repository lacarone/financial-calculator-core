import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './ButtonIconText.css';



// props input
// colorTheme: String
// buttonText: String
// buttonIcon: FA component
// addedClasses: additional classes

function ButtonIconText(props: any) {
    let buttonColorTheme: string;

    if (props.colorTheme === "transparent-dark") {
        buttonColorTheme = "App-button-transparent-dark";
    }
    else if (props.colorTheme === "glass-dark") {
        buttonColorTheme = "App-button-glass-dark";
    }
    else if (props.colorTheme === "glass-dark-light") {
        buttonColorTheme = "App-button-glass-dark-light";
    }
    else {
        buttonColorTheme = "App-button-green-main";
    }



    
    return (
        // the reason the ButtonIconText-main is last is because it should be able to overried all
        // the standard styles here, so in a way it has the power to customize itself if needed
        // for a very specific use
        <button className={`App-button-core ${buttonColorTheme} ButtonIconText-main ${props.addedClasses?props.addedClasses:''}`}>
            <div className="ButtonIconText-box">
                <div className="ButtonIconText-icon">
                    <FontAwesomeIcon icon={props.buttonIcon} />
                </div>
                <div className="ButtonIconText-text">
                    {props.buttonText}
                </div>
            </div>
        </button>
    )
}


export default ButtonIconText;