import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './ButtonIcon.css';


// props taken
// buttonIcon = FA icon component
// colorTheme = class code name for styles
// addedClasses = additional classes to be added

function ButtonIcon(props: any) {  
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
        // ButtonIcon-main (css not decalred but could be in ButtonIcon.css located in the same folder as the component, it can be used to override the styles of root App design)
        <button className={`ButtonIcon-icon-styles App-icon-button-core-compact-square ${buttonColorTheme} ButtonIcon-main ${props.addedClasses?props.addedClasses:''}`}>
          <FontAwesomeIcon icon={props.buttonIcon} />
        </button>
    )
}


export default ButtonIcon;