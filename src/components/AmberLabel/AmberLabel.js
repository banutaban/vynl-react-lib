import "./AmberLabel.css";
import React from "react";

export const AmberLabel = ({children}) => {
    return (
           <div className="amber-label">
        <label/>
        {children}
           </div>
    
    )
}