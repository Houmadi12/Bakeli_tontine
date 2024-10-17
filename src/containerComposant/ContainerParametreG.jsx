import { Component } from "react";
import Image from "../composants/Image";
import Img from "../assets/images/user.png";
import Bouton from "../composants/Button";


class ContainerParametreG extends Component{

    render(){
        return(
          <div className="container">
            <h1>Paramètres Généreaux</h1>
            <div className="row bg-white my-5 py-5">
                <div className="col-md-4 d-flex flex-column color-text align-items-center justify-content-center border-end border-5">
                    <h6 className="fw-light fs-4 mb-4">profil</h6>
                    <Image src={Img} value="img-fluid profil-param" />
                    <h1>Ndiaga Sall</h1>
                    <p className="fw-bold mt-5">Admin</p>

                    <Bouton values="btn color-bg w-50  text-white btn-p" text="Edit profil"/>
                </div>
                <div className="col-md-8 mt-5 mt-md-0 px-5">
                  <div className="container d-flex align-items-center h-100 px-4 ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="bg-card">Informations Génerals</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="d-flex justify-content-between">
                            <span>Prénom</span>
                            <span>Ndiaga</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex justify-content-between">
                            <span>Nom</span>
                            <span>Sall</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex justify-content-between">
                            <span>Statut</span>
                            <span>Administrateur</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex justify-content-between">
                            <span>E-mail</span>
                            <span>ndiaga@gmail.com</span>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th className="bg-card">Statistiques</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="d-flex justify-content-between">
                            <span>Nombre de membre ajoutés</span>
                            <span>25</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex justify-content-between">
                            <span>Nombre de membre archivés</span>
                            <span>10</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex justify-content-between">
                            <span>Nombre de membre bloqués</span>
                            <span>4</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
        )
    }
}

export default ContainerParametreG;