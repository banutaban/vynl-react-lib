
import React from "react";

import { AmberInput } from '../components/AmberInput/AmberInput';
import { FormField } from '../components/FormField/FormField';
import { AmberLabel } from '../components/AmberLabel/AmberLabel';


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

    <div className="wrap-formfield">
    <h2>Input</h2>

    <div className="input-multilab">
        <div>
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
    </div>

    <div className="input-icon">
        <div>
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

    <div className="input-text">
        <div>
            <FormField>
                <AmberInput
                    type="text"
                    placeholder="email address"
                    autofocus=""
                    autocomplete=""
                    name="email"
                />
            </FormField>
        </div>
    </div>

    <div className="input-password">
        <div>
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
    </div>
</div>
       
    )
}