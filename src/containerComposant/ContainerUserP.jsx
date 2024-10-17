import { Component } from "react";

class ContainerUserP extends Component{

    render(){
        return(
          <div className="container-fluid">
            <h1 className="mt-1">Paramètres Généreaux</h1>
            <div className="row bg-white mt-5 py-5">
                <div className="col-md-2 d-flex flex-column color-text align-items-center justify-content-start border-end border-5">
                   <h4 className="mt-4 fs-6 fw-bold">Membres</h4>
                   <ul className="list-unstyled d-flex flex-column gap-4 mt-3">
                    <li>Selena Roy</li>
                    <li>Emma Watson</li>
                    <li>Jhon Robert</li>
                    <li>Anne Hathaway</li>
                    <li>Ravi Shankar</li>
                    <li>Emma Stone</li>
                    <li>Floyd Miles</li>
                    <li>Jane Cooper</li>
                   </ul>
                </div>
                <div className="col-md-8 mt-4 mt-md-0">
                  <div className="container d-flex flex-column h-100 ">
                    <h3 className="text-font fs-5 fw-bold">Formation Général</h3>
                    <div className="row ps-4 mt-5">
                        <form className="form-group d-flex flex-column gap-3">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                  <label for="nom" className="form-label text-font">Nom</label>
                                  <input type="text" className="form-control" id="nom" value="Selena"/>
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label for="prenom" className="form-label text-font">prénom</label>
                                  <input type="text" className="form-control" id="prenom" value="Roy" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                  <label for="datNais" className="form-label text-font">Date de naissance</label>
                                  <input type="text" className="form-control" id="datNais" value="10-02-1998" />
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label for="profession" className="form-label text-font">Profession</label>
                                  <input type="text" className="form-control" id="profession" value="Designer" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                  <label for="mdp" className="form-label text-font">Définir mot de passe</label>
                                  <input type="password" className="form-control" id="mdp" value="djfdlqjdkk"/>
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label for="mdpCnf" className="form-label text-font">Confirmer votre mot de passe</label>
                                  <input type="password" className="form-control" id="mdpCnf" value="djfdlqjdkk"/>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                  <label for="mail" className="form-label text-font">Email</label>
                                  <input type="email" className="form-control" id="mail" value="Selenaroy98@gmail.com " />
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label for="tel" className="form-label text-font">Téléphone</label>
                                  <input type="password" className="form-control" id="tel" value="+221 77 250 11 22" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                  <label for="adresse" className="form-label text-font">Adresse</label>
                                  <input type="email" className="form-control" id="adress" value="HLM Grand Yoff, Dakar" />
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label for="organisation" className="form-label text-font">Organisation</label>
                                  <input type="text" className="form-control" id="organisation" value="Volkeno" />
                              </div>
                            </div>
                          </div>      
                          <div className="col-md-12 d-flex justify-content-end mb-5">
                            <button type="submit" className="btn color-bg text-white btn-ajout text-font">Mettre à jour</button>
                          </div>    
                        </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        )
    }
}

export default ContainerUserP;