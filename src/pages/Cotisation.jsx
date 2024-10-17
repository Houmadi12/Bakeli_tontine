import React, { Component } from "react";
import AppLayout from "../layout/AppLayout";
import Container3 from "../containerComposant/ContainerCotisation";

class Cotisations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ''
    };
  }

  container1 = () => <Container1 />

  render() {
    return (
      <AppLayout role="Cotisation">
          <Container3 />
       </AppLayout> 
    );
  }
}

export default Cotisations;
