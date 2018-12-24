import "./AmberInput.css";
import React from "react";



export const AmberInput = ({children, ...props}) => {
    return (
           <div className="amber-input">
        <input {...props}/>
        {children ? <div className="icon-wrapper">{children}</div> : undefined }
           </div>
    
    )
}