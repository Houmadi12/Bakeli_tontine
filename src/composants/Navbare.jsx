import { Component } from "react";
import { GrNotification } from "react-icons/gr";
import Image from "./Image";
import Img from "../assets/images/user.png";

class Navbare extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      // Navbar
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container px-md-5 d-flex justify-content-center justify-content-md-between">
          <a className="navbar-brand fs-4 fw-bold text-font" href="#">
            {this.props.role}
          </a>
          <div className="d-flex justify-content-center align-items-center">
            <div className="fs-3 me-3">
              <GrNotification />
            </div>

            <div className="dropdown">
              <div className="dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-flex gap-2">
                  <Image src={Img} value="img-fluid profil-img" />
                  <div className="d-flex flex-column text-font">
                    <span className="fs-5">Ndiaga SALL</span>
                    <span className="text-black-50">Administrateur</span>
                  </div>
                </div>
              </div>
              <ul className="dropdown-menu text-font">
              <li>
                <a className="dropdown-item text-center" href="#">
                  Profil
                </a>
              </li>
              <li>
                <a className="dropdown-item text-center" href="#">
                  Modifier mot de passe
                </a>
              </li>
              <li>
                <a className="dropdown-item text-center" href="#">
                  Déconnexion
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbare;
