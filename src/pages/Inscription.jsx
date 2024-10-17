import React, { Component } from "react";
import Slider from "../composants/Slide";
import Img from "../assets/images/insc.png";
import Image from "../composants/Image";
import Register from "../composants/RegisterForm";

class Inscription extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row h-100">
        <Slider img=<Image src={Img} value="img-fluid" /> />
        <Register />
      </div>
    );
  }
}

export default Inscription;
