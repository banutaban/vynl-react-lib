import React from "react";
import {NavLink} from "react-router-dom";
import "./menu.css";


export const Menu = () => {
    return (
       
    
         <nav className="menu-list">

            <NavLink to="/button/" className="paragraph" activeClassName="selected">Button</NavLink>
   
            <NavLink to="/input/" className="paragraph" activeClassName="selected">Input</NavLink>

            <NavLink to="/toggle/" className="paragraph" activeClassName="selected">Toggle</NavLink>

            <NavLink to="/notification/" className="paragraph" activeClassName="selected">Notification</NavLink>

            <NavLink to="/misc/" className="paragraph" activeClassName="selected">Miscellaneous</NavLink>
            
      </nav>
   
    )
}

