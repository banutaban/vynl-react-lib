
import React from "react";

import { AmberRadio } from '../components/AmberRadio/AmberRadio';
import { AmberCheckbox } from '../components/AmberCheckbox/AmberCheckbox';

export const Toggle = () => {
    return (

    <div>

            <div className="page-intro">
			    <div className="headline-02">Toggles</div>

                <div className="paragraph">Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo.</div>

			</div>

            <div className="page-section">
			
			    <div className="headline-04-primary">Radio</div>

                    <AmberRadio/>
         
            </div>

            <div className="page-section">
			
			    <div className="headline-04-primary">Checkbox</div>

                    <AmberCheckbox/>
         
            </div>

    </div>
)

}

