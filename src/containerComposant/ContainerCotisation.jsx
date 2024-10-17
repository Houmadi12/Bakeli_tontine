import Reactat, { Component } from "react";
import { BsThreeDots } from "react-icons/bs";
import Block from "../composants/BlocInfo";
import SkillBar from "../composants/SkillBar";
import Tableaux from "../composants/Tableaux";

class Container3 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-12 d-flex justify-content-end fs-1">
                        <div className="w-15 px-3 align-items-center"><BsThreeDots /></div>
                    </div>
                    <div className="col-12 px-5"> 
                        <div className="row px-4 mt-1">
                            <div className="col-4">
                                <Block infoHeard="Juin" somme="225.000 FCFA" color="fs-3" />
                            </div>
                            <div className="col-4">
                                <Block infoHeard="Mai" somme="100.000 FCFA" color="fs-3" />
                            </div>
                            <div className="col-4">
                                <Block infoHeard="Total Caisse" somme="3.500.000 FCFA" color="fs-3" infos=<SkillBar  values="progress height-progress" infotitle=<span>77% du seuil</span> param="progress-bar bg-card w-75" /> /> 
                            </div>
                        </div>
                    </div>
                    <div className="col-12 px-5">
                        <div className="row px-4 mt-5">
                            <Tableaux />
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
  }
}

export default Container3;
