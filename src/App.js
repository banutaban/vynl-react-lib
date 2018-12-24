
import React, { Component } from 'react';

import {AmberLabel} from "./components/AmberLabel/AmberLabel";

import {AmberInput} from "./components/AmberInput/AmberInput";

import {FormField} from "./components/FormField/FormField";

import {AmberButton} from "./components/AmberButton/AmberButton";
import './App.css';

import {AmberButtonGroup} from "./components/AmberButtonGroup/AmberButtonGroup";

import {AmberHeader} from "./ui/header/header";


import logo from "./assets/images/amber_logo.png";

/* ICONS */

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

/* Too add new icons from the Fontawesome solid free package, copy the name of the selected icon from the FA website and place the name 
with a coma afte the faHeart on the 11th line. Don't forget to place each added icon under the 16th line, 
as the same format at the 16th line. */

library.add(faHeart)



class App extends Component {
  render() {
    return [
      <AmberHeader>
      <div className ="amber-logo">
      <img src= {logo}>
      </img>
      </div>

      </AmberHeader>,

      <div className="body">

           <h1>Buttons</h1>
        {/* CONTAINED BUTTON */}

        <div className="wrap-contained">

         <h2>Contained Button</h2> 

              <div className="cnt-small">
              
              <div className="margin-s-default">
                <AmberButton size="small">
                  Small Button
                </AmberButton>
                </div>

                <div className="margin-s-loading">

                <AmberButton size="small" loading={true}>
            
                </AmberButton>

                </div>

                <div className="margin-s-disabled">

                <AmberButton size="small" disabled={true}>
                  Small Button
                </AmberButton>

                </div>

                </div> {/* div containd-button.small close */}

                <div className="cnt-mid">

                <div className="margin-m-default">

                <AmberButton size="medium">
                  Medium Button
                </AmberButton>

                </div>


                <div className="margin-m-loading">
                <AmberButton size="medium" loading={true}>
      
                </AmberButton>
                </div>
                
                <div className="margin-m-disabled">

                <AmberButton size="medium" disabled={true}>
                  Medium Button
                </AmberButton>
              </div>

                </div> {/* div containd-button.mid close */}
                

                <div className="cnt-large">


               <div className="margin-l-default">
                <AmberButton size="large">
                  Large Button
                </AmberButton>
                </div>

                 <div className="margin-l-loading">

                <AmberButton size="large" loading={true}>
          
                </AmberButton>
                </div>

                <div className="margin-l-disabled">
                <AmberButton size="large" disabled={true}>
                  Large Button
                </AmberButton>
                </div>
              
                </div> {/* div containd-button.large close */}
                </div> {/* div wrap-contained close */}

        {/* OUTLINE BUTTON*/}

          <div className="wrap-outline">

        <div className="outline-small">

          <h2>Outline Button</h2> 

           <div className="margin-outs-default">

        <AmberButton size="small" kind="outline">
          Outline Button S
        </AmberButton>
        </div>

         <div className="margin-outs-loading">

        <AmberButton size="small" kind="outline" loading={true}>
          
          </AmberButton>
        </div>

         <div className="margin-outs-disabled">

        <AmberButton size="small" kind="outline" disabled={true}>
          Outline Button S
        </AmberButton>

        </div>

        </div>

        <div className="outline-mid">

        <div className="margin-outm-default">

        <AmberButton size="medium" kind="outline">
          Outline Button M
        </AmberButton>
        </div>

        <div className="margin-outm-loading">

        <AmberButton size="medium" kind="outline" loading={true}>
  
        </AmberButton>

        </div>

        <div className="margin-outm-disabled">

         <AmberButton size="medium" kind="outline" disabled={true}>
        Outline Button M
        </AmberButton>

        </div>

        </div>

        <div className="outline-large">

           <div className="margin-outl-default">

        <AmberButton size="large" kind="outline">
          Outline Button L
        </AmberButton>

        </div>

           <div className="margin-outl-loading">

         <AmberButton size="large" kind="outline" loading={true}>
      
        </AmberButton>

        </div>

           <div className="margin-outl-disabled">

        <AmberButton size="large" kind="outline" disabled={true}>
        Outline Button L
        </AmberButton>

        </div> {/* div margin-large close */}
 
        </div>  {/* div outline-large close */}

        </div> {/* div wrap-outline close */}

        {/* TEXT BUTTON*/}

          <div className="wrap-textbutton">

             <h2>Text Button</h2> 

          <div className="textbutton-small">

          <div className="margin-textbtns-default">

        <AmberButton size="small" kind="text">
          Text Button S
        </AmberButton>

        </div>

         <div className="margin-textbtns-loading">

        <AmberButton size="small" kind="text" loading={true}>
          Text Button S
        </AmberButton>

        </div>

        <div className="margin-textbtns-disabled">

        <AmberButton size="small" kind="text" disabled={true}>
          Text Button S
        </AmberButton>
        
        </div>

        </div> {/*textbtn small close*/}

        <div className="textbutton-mid">

           <div className="margin-textbtnm-default">

        <AmberButton size="medium" kind="text">
          Text Button M
        </AmberButton>

        </div>

          <div className="margin-textbtnm-loading">

        <AmberButton size="medium" kind="text" loading={true}>
          Text Button M
        </AmberButton>

        </div>

          <div className="margin-textbtnm-disabled">
         
         <AmberButton size="medium" kind="text" disabled={true}>
          Text Button M
        </AmberButton>

        </div>

          </div> {/*textbtn mid close*/}

          <div className="textbutton-large">

           <div className="margin-textbtnl-default">

        <AmberButton size="large" kind="text">
          Text Button L
        </AmberButton>

         </div>

         <div className="margin-textbtnl-loading">

        <AmberButton size="large" kind="text" loading={true}>
          Text Button L
        </AmberButton>

        </div>

        <div className="margin-textbtnl-disabled">
       
        <AmberButton size="large" kind="text" disabled={true}>
          Text Button L
        </AmberButton>

        </div> {/* div margin-large close */}

       </div> {/* div text-button-large close */}

        </div> {/* div wrap-outline close */}


        {/* BUTTON WITH ICON AND LABEL*/}

        <div className="wrap-iconlabel_btn">

        <h2>Button with Icon and Label - Left</h2> 

         <div className="iconlabel-small">

          <div className="margin-iconlabels-default">

        <AmberButton size="small" kind="withicon">
        <div className="iconwrappers">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrappers">
        With Icon S 
        </div>
        </AmberButton>

        </div>

        <div className="margin-iconlabels-loading">

        <AmberButton size="small" kind="withicon" loading={true}>
        <div className="iconwrappers">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrappers">
        With Icon S 
        </div>
        </AmberButton>

        </div>

        <div className="margin-iconlabels-disabled">

        <AmberButton size="small" kind="withicon" disabled={true}>
        <div className="iconwrappers">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrappers">
        With Icon S 
        </div>
        </AmberButton>

        </div>

        </div> {/* div iconlabel-small close */}

         <div className="iconlabel-mid">

        <div className="margin-iconlabelm-default">

        <AmberButton size="medium" kind="withicon">
        <div className="iconwrapperm">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrapperm">
        With Icon M 
        </div>
        </AmberButton>

        </div>

        <div className="margin-iconlabelm-loading">

        <AmberButton size="medium" kind="withicon" loading={true}>
        <div className="iconwrapperm">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrapperm">
        With Icon M
        </div>
        </AmberButton>
        </div>

        <div className="margin-iconlabelm-disabled">
    
        <AmberButton size="medium" kind="withicon" disabled={true}>
        <div className="iconwrapperm">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrapperm">
        With Icon M
        </div>
        </AmberButton>

        </div>

        </div> {/* div iconlabel-mid close */}
        

        <div className="iconlabel-large">

         <div className="margin-iconlabell-default">
        
        <AmberButton size="large" kind="withicon">
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrapperl">
        With Icon L 
        </div>
        </AmberButton>

        </div>

         <div className="margin-iconlabell-loading">

        <AmberButton size="large" kind="withicon" loading={true}>
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrapperl">
        With Icon L 
        </div>
        </AmberButton>

        </div>

           <div className="margin-iconlabell-disabled">

        <AmberButton size="large" kind="withicon" disabled={true}>
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        <div className="labelwrapperl">
        With Icon L 
        </div>
        </AmberButton>

        </div> {/* div margin-iconlabell close */}
     
        </div> {/* div iconlabel-large close */}
        
        </div>  {/* wrapper-iconlabelbtn closure */}


        <div className="wrap-iconlabel_btn">

        <h2>Button with Icon and Label - Right</h2> 

        <div className="iconlabel-small">

          <div className="margin-iconlabels-default">

        <AmberButton size="small" kind="withicon">
        <div className="labelwrappers">
        With Icon S 
        </div>
        <div className="iconwrappers">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div>

        <div className="margin-iconlabels-loading">

        <AmberButton size="small" kind="withicon" loading={true}>

        <div className="labelwrappers">
        With Icon S 
        </div>

        <div className="iconwrappers">
        <FontAwesomeIcon icon="heart"/>
        </div>

        </AmberButton>

        </div>

        <div className="margin-iconlabels-disabled">

        <AmberButton size="small" kind="withicon" disabled={true}>

        <div className="labelwrappers">
        With Icon S 
        </div>
        <div className="iconwrappers">
        <FontAwesomeIcon icon="heart"/>
        </div>

        </AmberButton>

        </div>

        </div> {/* div iconlabel-small close */}

        <div className="iconlabel-mid">

        <div className="margin-iconlabelm-default">

        <AmberButton size="medium" kind="withicon">

        <div className="labelwrapperm">
        With Icon M 
        </div>

        <div className="iconwrapperm">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div>

        <div className="margin-iconlabelm-loading">

        <AmberButton size="medium" kind="withicon" loading={true}>

        <div className="labelwrapperm">
        With Icon M
        </div>
        <div className="iconwrapperm">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>
        </div>

        <div className="margin-iconlabelm-disabled">

        <AmberButton size="medium" kind="withicon" disabled={true}>

        <div className="labelwrapperm">
        With Icon M
        </div>
        <div className="iconwrapperm">
        <FontAwesomeIcon icon="heart"/>
        </div>

        </AmberButton>

        </div>

        </div> {/* div iconlabel-mid close */}


        <div className="iconlabel-large">

        <div className="margin-iconlabell-default">

        <AmberButton size="large" kind="withicon">

        <div className="labelwrapperl">
        With Icon L 
        </div>
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div>

        <div className="margin-iconlabell-loading">

        <AmberButton size="large" kind="withicon" loading={true}>

        <div className="labelwrapperl">
        With Icon L 
        </div>
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div>

          <div className="margin-iconlabell-disabled">

        <AmberButton size="large" kind="withicon" disabled={true}>

        <div className="labelwrapperl">
        With Icon L 
        </div>
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div> {/* div margin-iconlabell close */}

        </div> {/* div iconlabel-large close */}

        </div>  {/* wrapper-iconlabelbtn closure */}
     

      {/* FAB */}

      <div className="wrap-fab">

      <h2>FAB</h2>

      <div className="fab-default">
      
        <AmberButton size="large" kind="fab">
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div>

        <div className="fab-disabled">

        <AmberButton size="large" kind="fab" disabled={true}>
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div>

        </div>
   

      {/* BUTTON WITH ONLY ICON */}


      <div className="wrap-onlyicon">

        <h2>Button with Only Icon</h2>

        <div className="onlyicon-default">

        <AmberButton size="large" kind="onlyicon">
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>

        </div>

        <div className="onlyicon-disabled">
        <AmberButton size="large" kind="onlyicon" disabled={true}>
        <div className="iconwrapperl">
        <FontAwesomeIcon icon="heart"/>
        </div>
        </AmberButton>
        </div>

        </div>

       {/* TOGGLE BUTTON */}

        <div className="wrap-togglebutton">

        <h2>Button with Only Icon</h2>

        <AmberButtonGroup>
         <AmberButton size="small" kind="text">Bold</AmberButton>
        <AmberButton size="small" kind="text">Italic</AmberButton>
        <AmberButton size="small" kind="text">Underline</AmberButton> 
        </AmberButtonGroup> 
        
        </div> 

       {/* FORM FIELD */}


       <div className="wrap-formfield">

        <h2>Input</h2>

        <div className="input-multilab">
        
        <div>
        <FormField>
          <div>
          <AmberLabel>
        Label
        </AmberLabel>
          </div>
          <div>
        <AmberInput type="text" placeholder="input with icon" autofocus="" autocomplete="" name="email">
        </AmberInput>
        </div>
        </FormField>
        </div>
        
        </div>

        <div className="input-icon">
        
        <div>
        <FormField>
        <AmberInput type="text" placeholder="input with icon" autofocus="" autocomplete="" name="email">
        <FontAwesomeIcon icon="heart"/>
        </AmberInput>
        </FormField>
        </div>
        
        </div>

        <div className="input-text">

        <div>
        <FormField>
        <AmberInput type="text" placeholder="email address" autofocus="" autocomplete="" name="email">
        </AmberInput>
        </FormField>
        </div>

        </div>

        <div className="input-password">

        <div>
        <FormField>
        <AmberInput type="password" placeholder="password" autofocus="" autocomplete="" name="password">
        </AmberInput>
        </FormField>
        </div>

        </div>

        </div>


    {/* BODY DIV CLOSE TAG */}

    </div>    

       
    ];
  }
}

export default App;
