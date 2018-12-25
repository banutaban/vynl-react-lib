import React from "react";
import {Link} from "react-router-dom";
import "./menu.css";


export const Menu = () => {
    return (
       
         <nav className="menu-list">
         
            <Link to="/">Home</Link>
   
            <Link to="/button/">Button</Link>
   
            <Link to="/input/">Input</Link>

      </nav>

    )
}