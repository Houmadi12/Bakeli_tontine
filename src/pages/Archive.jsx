import React, { Component } from "react";
import AppLayout from "../layout/AppLayout";
import ContainerArchive from "../containerComposant/ContainerArchive";

class Archive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ''
    };
  }

  render() {
    return (
      <AppLayout role="Paramètre">
          <ContainerArchive />
       </AppLayout> 
    );
  }
}

export default Archive;
