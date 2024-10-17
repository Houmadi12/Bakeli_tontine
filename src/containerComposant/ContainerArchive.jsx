import { Component } from "react";
import { IoMdArchive } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";


class ContainerArchive extends Component{

    render(){
        return(
          <>
            <h1 className="ms-5 mt-2 fs-2">Archives</h1>
            <div className="container-fluid bg-white vh-100">
            <div className="container w-50 mt-5 py-5">
                <div>
                  <h1 className="fs-3 text-font ps-4">10 Membres Archivés</h1>
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
                            <span className="text-color"><IoMdArchive /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Emma Watson</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-color"><IoMdArchive /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Jhon Robert</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-color"><IoMdArchive /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Anne Hathaway</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-color"><IoMdArchive /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Ravi Shankar</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-color"><IoMdArchive /></span>
                          </td>
                        </tr>
                        <tr>
                          <td>Emma Stone</td>
                          <td>01/01/2022</td>
                          <td className="fs-5 d-flex gap-2">
                            <span><IoEyeOutline /></span>
                            <span className="text-color"><IoMdArchive /></span>
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

export default ContainerArchive;