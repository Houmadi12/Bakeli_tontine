import { Component } from "react";

class CardChart extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="card w-100">
          <div className="card-header bg-card text-font">
            {this.props.titre}
          </div>
          <div className="card-body text-font d-flex align-items-center justify-content-center" style={{height:"50vh"}}>
          {this.props.chartContent}</div>
        </div>
      </>
    );
  }
}

export default CardChart;
