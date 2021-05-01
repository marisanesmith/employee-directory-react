
import React from 'react';
import "./style.css";

function TableHtml (props)  {

  let { format, headings, rows, click } = props;
  console.log(headings);
  console.log(rows);


  return (
        <table className={`table ${format || "table-striped"}`}>
        <thead>
          <tr>
          {headings.map(heading => { 
          if (heading === "Name") {
            return <th scope="col" onClick={click}>{heading}</th>
          } else {
          return <th scope="col">{heading}</th>}})
          }
          </tr>
        </thead>
        <tbody>   
          {rows.map(row => <tr>{row.map(item => <td>{item}</td>)}</tr>)}   
        </tbody>
      </table>
  );
}

export default TableHtml;
