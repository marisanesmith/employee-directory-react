// where the html skeleton of the table will be

// import TableData from "./components/TableData";

import React, { Component } from "react";
import "./style.css";
import API from "../../utils/api";
import TableData from "../TableData";

class TableHtml extends Component {
  state = {
    result: {},
    search: ""
  };

componentDidMount() {
  this.employeeDirectory();
}

employeeDirectory = query => {
  API.search(query)
  .then(res => this.setState({ result: res.data }))
  .catch(err => console.log(err));
}
}

// function TableHtml() {
//     return (
//         <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Image</th>
//             <th scope="col">First</th>
//             <th scope="col">Last</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Email</th>
//             <th scope="col">DOB</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </table>
//   );
// }

export default TableHtml;
