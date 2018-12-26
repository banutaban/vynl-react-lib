
import React from "react";

import { AmberInput } from '../components/AmberInput/AmberInput';
import { FormField } from '../components/FormField/FormField';
import { AmberLabel } from '../components/AmberLabel/AmberLabel';


import './input.css';

/* ICONS */

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

/* Too add new icons from the Fontawesome solid free package, copy the name of the selected icon from the FA website and place the name 
with a coma afte the faHeart on the 11th line. Don't forget to place each added icon under the 16th line, 
as the same format at the 16th line. */

library.add(faHeart);

export const Input = () => {
    return (

        <div>
            <div className="page-intro">
                <div className="headline-02">Input</div>

                <div className="paragraph">Sed ut perspiciatis unde omnis iste natus error 
                     sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                    et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
        
            <div className="page-section">
        
                <div className="headline-04-primary">Input Default</div>

                    <FormField>
                        <AmberInput
                            type="text"
                            placeholder="email address"
                            autofocus=""
                            autocomplete=""
                            name="email"
                        />
                    </FormField>

                    <FormField>
                        <AmberInput
                            type="password"
                            placeholder="password"
                            autofocus=""
                            autocomplete=""
                            name="password"
                        />
                    </FormField>
                
                </div>

                <div className="page-section">
        
                <div className="headline-04-primary">Input with Multi Labels</div>

                    <FormField>
                        <div>
                            <AmberLabel>Label</AmberLabel>
                        </div>
                        <div>
                            <AmberInput
                                type="text"
                                placeholder="input with icon"
                                autofocus=""
                                autocomplete=""
                                name="email"
                            /> 
                            </div>   
                    </FormField>
                
                </div>
                    
                <div className="page-section">
        
                <div className="headline-04-primary">Input with Icon</div>

                    <FormField>
                        <AmberInput
                            type="text"
                            placeholder="input with icon"
                            autofocus=""
                            autocomplete=""
                            name="email"
                        >
                            <FontAwesomeIcon icon="heart" />
                        </AmberInput>
                    </FormField>
                </div>
        </div>
       
    )
}