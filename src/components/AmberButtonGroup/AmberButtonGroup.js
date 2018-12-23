import "./AmberButtonGroup.css";
import React from "react";

export const AmberButtonGroup = ({children, size="medium", disabled, kind}) => {
    return (
        <div className="buttonGroup">
            {children}
        </div>
    )
}