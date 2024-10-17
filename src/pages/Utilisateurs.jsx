import React, { Component } from "react";
import AppLayout from "../layout/AppLayout";
import Container2 from "../containerComposant/ContainerUtilisateurs";

class Utilisateurs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ''
    };
  }

  render() {
    return (
      <AppLayout role="Utilisateurs">
          <Container2 />
       </AppLayout> 
    );
  }
}

export default Utilisateurs;
