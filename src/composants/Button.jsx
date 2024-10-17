import Reactat, { Component } from "react";

class Bouton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button type="button" className={this.props.values}>
        {" "}
        {this.props.text}{" "}
      </button>
    );
  }
}

export default Bouton;
