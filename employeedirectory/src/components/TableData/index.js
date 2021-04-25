// where all the data for the table is handled (api call)
// lifecycle method

// create another file in the utils folder where you will include the api.js for the URL of the api

import React from 'react';
import TableHtml from '../TableHtml'

function TableData(props) {
  return (
    props.data.map(employee => (
        <TableHtml
        image={employee.image}
        name={employee.name}
        email={employee.email}
        phone={employee.phone}
        nationality={employee.nationality}
    />
    ))
    
  );
}

export default TableData;