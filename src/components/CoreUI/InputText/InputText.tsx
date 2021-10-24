import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './InputText.css';




// props input:
// inputLabel: String
// inputPlaceholder: String
// inputValue: String
// addedClasses: String
// 
function InputText(props: any) {
    
    
    return (
        <div className={` ${props.inputLabel ? 'InputText-box-with-label' : 'InputText-box'}`}>
            {
                props.inputLabel 
                ?
                <label className="InputText-label">{props.inputLabel}</label> 
                : 
                ''
            }

            <input 
                className={`InputText-main ${props.addedClasses?props.addedClasses:''}`} 
                type="text" 
                placeholder={`${props.inputplaceholder?props.inputplaceholder:'Type here'}`} 
            />

            {
                props.inputLabel 
                ? 
                <div className="InputText-error-message">{props.inputError}</div>
                : 
                ''
            }

        </div>
    )
}



export default InputText;