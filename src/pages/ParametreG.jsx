import React, { Component } from "react";
import AppLayout from "../layout/AppLayout";
import ContainerParametreG from "../containerComposant/ContainerParametreG";

class ParametreG extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ''
    };
  }

  container1 = () => <Container1 />

  render() {
    return (
      <AppLayout role="Paramètre">
          <ContainerParametreG />
       </AppLayout> 
    );
  }
}

export default ParametreG;
