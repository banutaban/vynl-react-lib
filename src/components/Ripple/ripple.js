import "./ripple.css";
import React, {Component} from "react";

class RippleEffect extends Component {
    render () {
    return (
            <div className="ripple-container">
                {this.props.children}
            </div>
        )
    }
}

export default RippleEffect;

