import "./AmberButton.css";
import React from "react";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
library.add(faSpinner)



const renderLoading=() => {
    return (
    <div className="loading-spinner">
        <FontAwesomeIcon icon="spinner"/>
    </div>
    )

}
export const AmberButton = ({children, size="medium", disabled, kind, loading}) => {
    const cssNameArray = ["amber-button", size, kind, loading ? "loading":""];
    return (
            <button className={cssNameArray.join(" ")} disabled={disabled}>
            {loading ? renderLoading():children} 
            </button> 
    
    )
}