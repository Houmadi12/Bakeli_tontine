import Reactat, { Component } from "react";

class SkillBar extends Component {
  constructor() {
    super();
  }
  // progress-bar bg-card w-50
  render() {
    return (
      <div className={this.props.values}>
        <div
          className={this.props.param}
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    );
  }
}

export default SkillBar;
