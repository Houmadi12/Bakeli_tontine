import Reactat, { Component } from "react";

class Link_ extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <a href={this.props.link} className={this.props.valeurs}>{this.props.text}</a>
        )
    }
}

export default Link_;