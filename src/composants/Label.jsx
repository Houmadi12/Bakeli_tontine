import Reactat, { Component } from "react";

class Label extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <label for={this.props.id} className={this.props.values}>{this.props.titre}</label>
        )
    }
}

export default Label;