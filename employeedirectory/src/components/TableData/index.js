import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/api'

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
        format: "",
        employees: [],
    };

    componentDidMount() {
        console.log(this.props.search);
        this.searchEmployee();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.search !== prevProps.search) {
            this.displayEmployees();
        }  
    }

    displayEmployees = () => {
        console.log(this.state.employees);
        console.log(this.props.search);
        if (this.state.employees) {
            const rows = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.props.search))
            .map(employee => {
                console.log(employee);
                return [<img src={employee.picture.medium} className="rounded-circle" alt={employee.name}></img>, `${employee.name.first} ${employee.name.last}`, employee.email, employee.phone, employee.nat]
            })
                this.setState({ rows }) 
        }
        
    }
    
    searchEmployee = async () => {
        await API.getEmployee()
        .then(employees => {
            this.setState({ employees:employees.data.results }, () => {this.displayEmployees()}) 
            console.log(employees.data.results);
            // console.log(this.props.search); 
            })
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

    //     const value = event.target.value;
    //     const name = event.target.name;
    //     const filteredEmployee = this.state.rows.filter(item => {
    //     const values = Object.values(item).join("").toLowerCase();
    //     return values.indexOf(value.toLowerCase()) !== -1;
    //     })
    //     console.log(filteredEmployee);

    //     this.setState({
    //         [name]: value,
    //         filteredUsers: filteredEmployee
    //     })
    // };

    //     if (event.target.name === "search") {
    //         const searchTerm = event.target.value.toLowerCase();
    //         this.setState({
    //             search: searchTerm
    //         })
    //     }
    // }

    // handleInputChange = event => {
    //     if (event.target.name === "search") {
    //         const searchTerm = event.target.value.toLowerCase();
    //         this.setState({
    //             search: searchTerm
    //         })
    //     }
    // }


    // sortFName = () => {
    //     const sortEmployees = this.state.results.sort((a,b) => {
    //         if (b.name.first > a.name.first) {
    //             return -1
    //         }
    //         if (a.name.first > b.name.first) {
    //             return 1
    //         }
    //         return 0;
    //     });
    //     if (this.state.sortOrder === "DESC") {
    //         sortEmployees.reverse();
    //         this.setState({ sortOrder: "ASC" });
    //     } else {
    //         this.setState({ sortOrder: "DESC" });
    //     }
    //     this.setState({ results: sortEmployees })
    // }
    


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