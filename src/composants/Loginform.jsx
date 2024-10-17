import { Component } from "react";
import Input from "./Input";
import Link_ from "./Link";
import Bouton from "./Button";

class LoginForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-8 my-5 p-0 text-center">
        <h1 className="color-text text-font mb-5 display-4 fw-normal">
          {" "}
          Bienvenue sur Bakéli-tontine
        </h1>
        <h6 className="color-text text-font fs-1 mb-4">Connectez-vous</h6>
        <span className="color-text text-font fs-5">
          Connectez-vous et gérez vos cotisations
        </span>
        <form className="mt-4">
          <div className="mb-4 d-flex justify-content-center px-5 ">
            <Input
              type="text"
              values="form-control w-50 input text-white"
              id="nom"
              desc="N° téléphone"
              className="form-control"
            />
          </div>
          <div className="mb-4 d-flex justify-content-center px-5 ">
            <Input
              type="password"
              values="form-control w-50 input text-white"
              id="mdp"
              desc="Mot de passe"
              className="form-control"
            />
          </div>
          <div className="mb-3 d-flex justify-content-center offset-3 ">
            <Link_
              link="#"
              valeurs="text-dark text-decoration-none"
              text="Mot de passe oublier ?"
            />
          </div>
          <div className="mb-3 d-flex justify-content-center px-5 ">
            <Link_
              link="/acceuil"
              valeurs="btn w-50 button-bg border-0 color-text text-font fw-bold align-items-center"
              text="Connexion"
            />
          </div>
          <div className="my-4 d-flex justify-content-center">
            <span className="me-1 color-text text-font">
              Vous n'avez pas de compte,
            </span>
            <Link_
              link="/inscription"
              valeurs="text-decoration-none color-text text-font fw-medium"
              text="Inscrivez-vous!"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
