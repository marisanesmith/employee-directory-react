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
        search: "",
        filteredUsers: [{}]
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
                return [<img src={employee.picture.thumbnail} alt={employee.name}></img>, `${employee.name.first} ${employee.name.last}`, employee.email, employee.phone, employee.nat]})

            console.log(rows);
            this.setState({ rows, filteredUsers: employees.data })})
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        const filteredEmployee = this.state.rows.filter(item => {
        const values = Object.values(item).join("").toLowerCase();
        return values.indexOf(value.toLowerCase()) !== -1;
        })
        this.setState({
            [name]: value,
            filteredUsers: filteredEmployee
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

    export default TableData;