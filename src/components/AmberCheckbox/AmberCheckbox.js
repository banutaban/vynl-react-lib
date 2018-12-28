import React, {
Component
} from "react";

import "./AmberCheckbox.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)


export class AmberCheckbox extends Component {

    constructor () {
        super ()
        this.state= {
            selected:false
        }
    }

    toggleSelected () {
        this.setState (
            {
                selected:!this.state.selected
            }
        )
    }

    render() {
        return (
            <div className = { this.state.selected? "amber-checkbox active": "amber-checkbox"} onClick= {
                () => this.toggleSelected ()
            }>
            {this.state.selected? <div className="inner-icon">
        <FontAwesomeIcon icon="check"/></div> :undefined }
            </div>

        )
    }

}


