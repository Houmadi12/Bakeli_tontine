import { Component } from "react";
import { GiWallet } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

class SliderA extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Link to="/acceuil">
          <div className="d-flex align-items-center justify-content-center gap-2 text-white fs-4 text-white text-font mt-5">
              <GiWallet />
              <span>Bakéli Tontine</span>
          </div>
        </Link>
        <ul className="d-flex flex-column list-unstyled text-white gap-3 mt-4 fs-5 list">
          <Link to="/acceuil">
            <li className="d-flex align-items-center gap-3 ps-4 py-2 text-white">
              <RxDashboard />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/utilisateurs">
            <li className="d-flex align-items-center gap-3 ps-4 py-2 text-white clik">
              <FiUser />
              <span>Utilisateurs</span>
            </li>
          </Link>
          <Link to="/cotisations">
            <li className="d-flex align-items-center gap-3 ps-4 py-2 text-white clik">
              <FaSackDollar />
              <span>Cotisations</span>
            </li>
          </Link>
          <div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header border-0 p-0">
                  <button
                    className="accordion-button no-focus-border bg-transparent text-white fs-3 ps-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <IoSettingsOutline />
                    <span className="ms-3 fs-5">Paramètres</span>
                  </button>
                </h2>
              </div>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body shadow-0">
                <Link to="/parametre">
                  <li className="d-flex align-items-center gap-2 ms-5 px-1 fs-6 text-white py-2">
                    Paramètres Généraux
                  </li>
                </Link>
                <Link to="/utilisateurParametre">
                  <li className="d-flex align-items-center gap-2 ms-5 px-1 fs-6 text-white py-2">
                    Utilisateurs
                  </li>
                </Link>
                <Link to="/archive">
                  <li className="d-flex align-items-center gap-2 ms-5 px-1 fs-6 text-white py-2">
                    Archive
                  </li>
                </Link>
                <Link to="/Bloqué">
                  <li className="d-flex align-items-center gap-2 ms-5 px-1 fs-6 text-white py-2">
                    Membres Bloqués
                  </li>
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </>
    );
  }
}

export default SliderA;
