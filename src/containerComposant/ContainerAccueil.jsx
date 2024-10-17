import Reactat, { Component } from "react";
import Block from "../composants/BlocInfo";
import CardChart from "../composants/Card-chart";
import ChartComposant from "../composants/Chart";
import Tableaux from "../composants/Tableaux";
import SkillBar from "../composants/SkillBar";
import ChartCircle from "../composants/ChartCircle";
import Image from "../composants/Image";
import Img from "../assets/images/img.png";

class Container1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="row d-flex justify-ms-content-center justify-content-center mt-2 mb-5 pb-5 px-sm-2">
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-lg-6 mb-2">
                <Block
                  infoHeard="Juin"
                  styl="fw-normal text-font text-titre"
                  values="fs-5 color-text text-font"
                  total="250.000 FCFA"
                  infos=<span className="text-secondary">
                    Nombre de cotisation: 27
                  </span>
                />
              </div>
              <div className="col-lg-6 mb-2">
                <Block
                  infoHeard="Mai"
                  styl="fw-normal text-font text-titre"
                  values="fs-5 color-text text-font"
                  total="100.000 FCFA"
                  infos=<span className="text-secondary">
                    Nombre de cotisation: 23
                  </span>
                />
              </div>
              <div className="col-lg-6 mb-2 d-md-none">
                <Block
                  infoHeard="Mai"
                  styl="fw-normal text-font text-titre"
                  img=<Image src={Img} value="card-img" />
                  values="fs-5 color-text text-font"
                  total="100.000 FCFA"
                  infos=<SkillBar
                    values="progress height-progress"
                    param="progress-bar bg-card w-50"
                  />
                />
              </div>
              <div className="col-12 mt-4 pb-3 pb-md-0">
                <CardChart
                  titre="Evoltion des cotisations en fonction du temps"
                  chartContent=<ChartComposant />
                />
              </div>
              <div className="col-12 mt-3 d-none d-md-block">
                <Tableaux infos="Juin" />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row gap-4">
              <div className="col-12 d-none d-md-block mb-md-5 mb-lg-0">
                <Block
                  infoHeard="Mai"
                  styl="fw-normal text-font text-titre"
                  img=<Image src={Img} value="card-img" />
                  values="fs-5 color-text text-font"
                  total="100.000 FCFA"
                  infos=<SkillBar
                    values="progress height-progress"
                    param="progress-bar bg-card w-50"
                  />
                />
              </div>
              <div className="col-12 mt-md-5 mt-lg-0 pt-md-5 pt-lg-2">
                <CardChart titre="Statistiques" chartContent=<ChartCircle /> />
              </div>
              <div className="col-12">
                <Tableaux infos="Top progression" />
              </div>
              <div className="col-12 mt-3 d-md-none">
                <Tableaux infos="Juin" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Container1;
