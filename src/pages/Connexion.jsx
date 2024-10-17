import Reactat from "react";
import Slider from "../composants/Slide";
import LoginForm from "../composants/Loginform";
import Img from "../assets/images/login.png";
import Image from "../composants/Image";

class Connexion extends Reactat.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row h-100">
        <Slider img=<Image src={Img} value="img-fluid" /> />
        <LoginForm />
      </div>
    );
  }
}

export default Connexion;
