// where the html skeleton of the table will be

// import TableData from "./components/TableData";

import React, { Component } from 'react';
import "./style.css";
import API from '../../utils/api';

class TableHtml extends Component ({ picture, name, phone, email, nationality }) {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.searchEmployee();
  }
  
  searchEmployee = () => {
    API.getEmployee()
    .then(employee => {
        console.log(employee);
        this.setState({ result: employee.data })})
    .catch(err => console.log(err));
  };
  render (){
  return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Nationality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{picture}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>{nationality}</td>
          </tr>
        </tbody>
      </table>
  )};
}

export default TableHtml;
