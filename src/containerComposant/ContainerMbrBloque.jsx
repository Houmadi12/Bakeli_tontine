import { Component } from "react";
import { MdBlockFlipped } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";


class ContainerMbrBloque extends Component{

    render(){
        return(
          <>
            <h1 className="ms-3 ms-md-5 mt-2 fs-2">Membres Bloqués</h1>
            <div className="container-fluide bg-white vh-100">
            <div className="container-fluide d-flex justify-content-center w-100 mt-5 py-5">
                <div className="w-75">
                  <h1 className="fs-3 text-font">10 Membres Bloqués</h1>
                  <table className="table">
                      <thead>
                        <tr>
                          <th className="bg-card">Membres</th>
                          <th className="bg-card">Date début</th>
                          <th className="bg-card">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Selena Roy</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-danger"><MdBlockFlipped /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Emma Watson</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-danger"><MdBlockFlipped /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Jhon Robert</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-danger"><MdBlockFlipped /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Anne Hathaway</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-danger"><MdBlockFlipped /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Ravi Shankar</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-danger"><MdBlockFlipped /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Emma Stone</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-danger"><MdBlockFlipped /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
          </div>
          </>
        )
    }
}

export default ContainerMbrBloque;