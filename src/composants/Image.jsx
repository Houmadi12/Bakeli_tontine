import { Component } from "react";

class Image extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <img src={this.props.src} alt={this.props.titre} className={this.props.value} />
        )
    }
}

export default Image;

