// where all the data for the table is handled (api call)
// lifecycle method

// create another file in the utils folder where you will include the api.js for the URL of the api

import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/api'

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
        format: "",
        search: ""
    };

      componentDidMount() {
        this.searchEmployee();
      }
      
      searchEmployee = () => {
        API.getEmployee()
        .then(employees => {
            console.log(employees.data.results);
            const rows = employees.data.results.map(employee => {
                console.log(employee);
                return [employee.picture.thumbnail, `${employee.name.first} ${employee.name.last}`, employee.email, employee.phone, employee.nat]})

            console.log(rows);
            this.setState({ rows })})
        .catch(err => console.log(err));
      };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };

    render() {
         return (
            <TableHtml
            headings={this.state.headings}
            rows={this.state.rows}
            format={this.state.format}
            />
         )   
    };
}

    // function TableData(props) {
    //   return (
    //     props.data.map(employee => (
    //         <TableHtml
    //         image={employee.image}
    //         name={employee.name}
    //         email={employee.email}
    //         phone={employee.phone}
    //         nationality={employee.nationality}
    //     />
    //     ))
    //     );
    // }

    export default TableData;