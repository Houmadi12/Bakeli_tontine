import React, { Component } from "react";
import AppLayout from "../layout/AppLayout";
import ContainerMbrBloque from "../containerComposant/ContainerMbrBloque";

class BlocPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ''
    };
  }

  render() {
    return (
      <AppLayout role="Paramètre">
          <ContainerMbrBloque />
       </AppLayout> 
    );
  }
}

export default BlocPage;
