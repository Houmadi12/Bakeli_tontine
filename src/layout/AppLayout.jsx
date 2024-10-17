import React, { Component } from "react";
import NavRespons from "../composants/NavRespons";
import Navbare from "../composants/Navbare";
import SlideA from "../composants/SlideA";

class AppLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ''
    };
  }

  container1 = () => <Container1 />

  render() {
    return (
        <>
          <div className="container-fluid">
                <div className="row fixed-top d-flex vh-md-100 flex-md-row-reverse">
                    <div className="col-md-10 p-0">
                        <div className="row">
                            <div className="col-12">
                                <Navbare role={this.props.role} />
                            </div>
                            <div className="col-12 d-md-block mt-2 p-0">
                                <nav className="navbar navbar-expand-lg color-bg d-md-none">
                                  <NavRespons />
                                </nav>
                                <div className="classe pt-4 px-4 d-md-block text-dark vh-100">
                                 {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 vh-md-100 color-bg fixed-md-top text-white">
                      <ul className="list-unstyled d-none d-md-block fs-2 d-flex flex-md-column gap-4 gap-md-0">
                       <SlideA/>
                      </ul>
                    </div>
                </div>
          </div>
        </>
    );
  }
}

export default AppLayout;
