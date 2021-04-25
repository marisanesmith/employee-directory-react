// where all the data for the table is handled (api call)
// lifecycle method

// create another file in the utils folder where you will include the api.js for the URL of the api

import React from 'react';
import TableHtml from '../TableHtml'
// function TableData(props) {
//     <div>
//         <tr>
//             <th scope="row"></th>
//           
//         </tr>
//     </div>
// }

function TableData(props) {
  return (
    props.data.map(employee => (
        <TableHtml
        <div className="text-center">
    <tr>
      <img alt={props.picture.thumbnail} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <td>{props.name.first}</td>
//    <td>{props.name.last}</td>
//    <td>{props.email}</td>
//    <td>{props.phone}</td>
//    <td>{props.nat}</td>
      </tr>
    </div>
    />
    ))
    
  );
}

export default TableData;