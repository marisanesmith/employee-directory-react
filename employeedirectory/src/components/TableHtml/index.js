
import React from 'react';
import "./style.css";

function TableHtml (props)  {

  let { format, headings, rows } = props;
  console.log(headings);
  console.log(rows);


  return (
        <table className={`table ${format || "table-striped"}`}>
        <thead>
          <tr>
            {headings.map(heading => <th scope="col">{heading}</th>)}
          </tr>
        </thead>
        <tbody>   
          {rows.map(row => <tr>{row.map(item => <td>{item}</td>)}</tr>)}   
        </tbody>
      </table>
  );
}

export default TableHtml;
