import Reactat, { Component } from "react";

class Tableaux extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className=" ">
        <h1 className="fs-5">{this.props.infos}</h1>
        <table className="table rounded overflow-hidden">
          <thead className="bg-card text-center">
              <th scope="col">Membres</th>
              <th scope="col">Montant</th>
              <th scope="col">Date</th>
              <th scope="col">Statut</th>
          </thead>
          <tbody>
              <tr className="text-center">
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
              <tr className="text-center">
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
              <tr className="text-center">
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
              <tr className="text-center">
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tableaux;
