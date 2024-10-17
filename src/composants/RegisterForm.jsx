import { Component } from "react";
import Input from "./Input";
import Link_ from "./Link";
import Bouton from "./Button";
import Label from "./Label";

class Register extends Component {
  render() {
    return (
      <div className="col-md-8 my-3 p-0 text-center">
        <h1 className="color-text text-font mb-4 display-6 fw-normal">
          {" "}
          Inscription
        </h1>
        <form className="row flex-column justify-content-center gap-4 align-items-center">
          <div className="col-12 w-75 d-flex gap-5">
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label id="nom" values="text-font text-start" titre="Nom" />
              <Input type="text" values="form-control w-100" id="nom" />
            </div>
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label id="prenom" values="text-font text-start" titre="Prenom" />
              <Input type="text" values="form-control w-100" id="prenom" />
            </div>
          </div>
          <div className="col-12 w-75 d-flex gap-5">
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label
                id="datNais"
                values="text-font text-start"
                titre="Date de naissance"
              />
              <Input type="date" values="form-control w-100" id="datNais" />
            </div>
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label
                id="proffession"
                values="text-font text-start"
                titre="Profession"
              />
              <Input type="text" values="form-control w-100" id="proffession" />
            </div>
          </div>
          <div className="col-12 w-75 d-flex gap-5">
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label
                id="mdp"
                values="text-font text-start"
                titre="Définir mot de passe"
              />
              <Input type="password" values="form-control w-100" id="mdp" />
            </div>
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label
                id="mdpconf"
                values="text-font text-start"
                titre="Confirmer votre mot de passe"
              />
              <Input type="password" values="form-control w-100" id="mdpconf" />
            </div>
          </div>
          <div className="col-12 w-75 d-flex gap-5">
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label id="email" values="text-font text-start" titre="E-mail" />
              <Input type="email" values="form-control w-100" id="email" />
            </div>
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label
                id="telephone"
                values="text-font text-start"
                titre="Télephone"
              />
              <Input type="text" values="form-control w-100" id="telephone" />
            </div>
          </div>
          <div className="col-12 w-75 d-flex gap-5">
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label
                id="adresse"
                values="text-font text-start"
                titre="Adresse"
              />
              <Input type="text" values="form-control w-100" id="adresse" />
            </div>
            <div className="col-md-6 d-flex flex-column gap-2">
              <Label
                id="org"
                values="text-font text-start"
                titre="Organisation"
              />
              <Input type="text" values="form-control w-100" id="org" />
            </div>
          </div>
          <div className="col-12 w-75 d-flex flex-column gap-3">
            <div className="col-12 d-flex justify-content-center px-5">
              <Bouton
                values="btn w-50 button-bg border-0 color-text text-font fw-bold"
                text="S'inscrire"
              />
            </div>
            <div className="d-flex justify-content-center">
              <span className="me-1 color-text text-font">
                Vous avez déjà un compte,
              </span>
              <Link_
                link="/"
                valeurs="text-decoration-none color-text text-font fw-medium"
                text="Connectez-vous!"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
