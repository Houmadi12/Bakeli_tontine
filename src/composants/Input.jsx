import Reactat, { Component } from "react";

class Input extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <input type={this.props.type} className={this.props.values} id={this.props.id} placeholder={this.props.desc}/>
        )
    }
}

export default Input;