import { Component } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { ImMenu } from "react-icons/im";


class NavRespons extends Component {

    render(){

        return(
            <div className="container">
                <a className="navbar-brand" href="#">
                    <div className="text-white fs-1 d-flex align-items-center">
                        <GiWallet />
                        <span className="ms-2 text-font">Bakéli Tontine</span>
                    </div>
                </a>
                <button className="navbar-toggler text-white border-0 fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <ImMenu />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav list">
                        <a className="nav-link text-white ps-4 fs-3 d-flex align-items-center" aria-current="page" href="/acceuil">
                            <RxDashboard />
                            <span className="ms-2">Dashboard</span> 
                        </a>
                        <a className="nav-link text-white ps-4 fs-3 d-flex align-items-center" aria-current="page" href="/acceuil">
                            <FiUser />
                            <span className="ms-2">Utilisateurs</span> 
                        </a>
                        <a className="nav-link text-white ps-4 fs-3 d-flex align-items-center" aria-current="page" href="/acceuil">
                            <FaSackDollar />
                            <span className="ms-2">Cotisations</span> 
                        </a>
                        <a className="nav-link text-white ps-4 fs-3 d-flex align-items-center" aria-current="page" href="/acceuil">
                            <MdOutlineSettings />
                            <span className="ms-2">Paramètres</span> 
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavRespons;