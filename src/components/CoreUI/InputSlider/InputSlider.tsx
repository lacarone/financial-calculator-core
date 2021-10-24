import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './InputSlider.css';




// props input:
// inputLabel: String
// inputPlaceholder: String
// inputValue: String
// addedClasses: String
// 
function InputSlider(props: any) {
    
    
    return (
        <div className={` ${props.inputLabel ? 'InputSlider-box-with-label' : 'InputSlider-box'}`}>
            {
                props.inputLabel 
                ?
                <label className="InputSlider-label">{props.inputLabel}</label> 
                : 
                ''
            }

            <input 
                className={`InputSlider-main ${props.addedClasses?props.addedClasses:''}`} 
                type="range" 
                placeholder={`${props.inputplaceholder?props.inputplaceholder:'Type here'}`} 
            />

            {
                props.inputLabel 
                ? 
                <div className="InputSlider-error-message">{props.inputError}</div>
                : 
                ''
            }

        </div>
    )
}



export default InputSlider;