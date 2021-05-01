import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/api';
// import SearchBar from '../SearchBar';

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
        format: "",
        filteredUsers: [{}]
    };

    componentDidMount() {
        this.searchEmployee();
    }
    
    searchEmployee = () => {
        API.getEmployee()
        .then(employees => {
            console.log(employees.data.results);
            console.log(this.props.search);
            const rows = employees.data.results.filter(employee => employee.name.first.toLowerCase().includes(this.props.search.toLowerCase()))
            .map(employee => {
                console.log(employee);
                return [<img src={employee.picture.medium} className="rounded-circle" alt={employee.name}></img>, `${employee.name.first} ${employee.name.last}`, employee.email, employee.phone, employee.nat]})

            console.log(rows);
            this.setState({ rows, filteredUsers: employees.data })})
        .catch(err => console.log(err));
    };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     const filteredEmployee = this.state.rows.filter(item => {
    //     const values = Object.values(item).join("").toLowerCase();
    //     return values.indexOf(name.toLowerCase()) !== -1;
    //     })
    //     this.setState({
    //         [name]: value,
    //         filteredUsers: filteredEmployee
    //     })
    // };

    // handleInputChange = event => {
    //     if (event.target.name === "search") {
    //         const searchTerm = event.target.value.toLowerCase();
    //         this.setState({
    //             search: searchTerm
    //         })
    //     }
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchEmployee(this.state.search);
    // };

    sortFName = () => {
        const sortEmployees = this.state.results.sort((a,b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });
        if (this.state.sortOrder === "DESC") {
            sortEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortEmployees })
    }
    

    render() {
        return (
            <div>   
            <TableHtml
            headings={this.state.headings}
            rows={this.state.rows}
            format={this.state.format}
            />
            </div>
        )   
    };
}

    export default TableData;