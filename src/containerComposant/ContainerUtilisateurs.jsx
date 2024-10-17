import Reactat, { Component } from "react";
import Block from "../composants/BlocInfo";
import { BsFillCircleFill } from "react-icons/bs";
import { BsBan } from "react-icons/bs";
import Bouton from "../composants/Button";
import Tableaux from "../composants/Tableaux";


class Container2 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <>
            <div className="row d-flex justify-content-center mb-5 px-4 vh-100">
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <Block infoHeard="Membres Actif " suiteHeard=<BsFillCircleFill /> id="cardBg" id1="textBloc" values="text-white" somme="94 Membres" />
                        </div>
                        <div className="col-4">
                            <Block infoHeard="Membres bloqués " suiteHeard=<BsBan /> values="text-dark" id2="color" somme="6 Membres" />
                        </div>
                        <div className="col-4">
                            <Block infoHeard="Total Effectif " values="text-dark" id2="color" somme="100 Membres" />
                        </div>
                    </div>
                    <div className="col-12 mt-3 text-end">
                        <Bouton text="Ajouter" values="btn fs-4 color-bg text-font btn-ajout text-white" />
                    </div>
                    <div className="col-12 mt-3 text-end">
                        <Tableaux/>
                    </div>
                </div>
            </div>
       </>
    );
  }
}

export default Container2;
