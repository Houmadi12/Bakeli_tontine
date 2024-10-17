import React, { Component } from "react";
import AppLayout from "../layout/AppLayout";
import ContainerUserP from "../containerComposant/ContainerUserP";

class UtilisateursP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ''
    };
  }

  render() {
    return (
      <AppLayout role="Paramètre">
          <ContainerUserP />
       </AppLayout> 
    );
  }
}

export default UtilisateursP;
