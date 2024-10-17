import React, { Component } from "react";
import Container1 from "../containerComposant/ContainerAccueil";
import AppLayout from "../layout/AppLayout";

class Acceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: "",
    };
  }

  container1 = () => <Container1 />;

  render() {
    return (
      <AppLayout role="Admin Dashboard">
        <Container1 />
      </AppLayout>
    );
  }
}

export default Acceuil;
