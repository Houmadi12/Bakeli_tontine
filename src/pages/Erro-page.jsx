import { Component } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

class ErrorPage extends Component{

    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error) {
        // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
        return { hasError: true };
      }
      
    render(){
        return(
            <div id="error-page" className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1> Oopps! </h1>
                <p>Désolé, la page chercher n'existe  pas.</p>
                <div className="fs-1 text-danger">
                    <BiSolidErrorAlt />
                </div>
            </div>
        )
    }
    
}

export default ErrorPage;