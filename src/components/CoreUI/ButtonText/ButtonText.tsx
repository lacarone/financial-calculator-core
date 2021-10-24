import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './ButtonText.css';


// I know, I could write an interface here to standardize everything but I'm in a rush to join a cool company
// btw this is why I also didn't write any tests for all components, hope you will understand
// this comment is totally random, this isn't the first component built on this project, its like 8th



// props input
// colorTheme: String
// buttonText: String
// addedClasses: additional classes
function ButtonText(props: any) {
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
        // the reason the ButtonText-main is last is because it should be able to overried all
        // the standard styles here, so in a way it has the power to customize itself if needed
        // for a very specific use
        <button className={`App-button-core ${buttonColorTheme} ButtonText-main ${props.addedClasses?props.addedClasses:''}`}>
            {props.buttonText} 
        </button>
    )
}


// I'm aware of how easily this code could go wrong, but again I'm in rush to create a simple React app
// so I can transition from my failed startup to a new start, round 2 of adult life.


export default ButtonText;