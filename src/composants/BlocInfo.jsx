import { Component } from "react";

class Block extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <>
                <div className="card w-100 h-100" id={this.props.id}>
                    <div className="card-body">
                        <div className="row">
                            {this.props.img}
                            <div className="col">
                                <h1 className="fw-normal text-font text-titre" id={this.props.id1}>{this.props.infoHeard} <span className="fs-5" id={this.props.id2}>{this.props.suiteHeard}</span></h1>
                                <h1 className={this.props.values}><span className={this.props.color}>{this.props.somme} </span> {this.props.total}</h1>
                                {this.props.infos}
                                {this.props.infotitle}
                            </div>
                        </div>
                    </div>
                </div>
            </>
    
        )
    }
}

export default Block;