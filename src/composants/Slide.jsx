import { Component } from "react";
import '../index.css';

class Slider extends Component {

  render() {
    return (
      <>
        <div className="col-md-4 color-bg rounded-end-5 d-flex flex-column justify-content-center">
               {this.props.img}
        </div>
      </>
    );
  }
}

export default Slider;
