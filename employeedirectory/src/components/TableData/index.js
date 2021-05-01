import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/api'

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
        format: "",
        employees: [],
        sort: "DESC",
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

    handleClick = () => {
        if (this.state.sort === "DESC") {
            this.setState({ sort: "ASCEND" })
        } else {
            this.setState({sort: "DESC"})
        }
        this.handleSort();
    }
    
    handleSort = () => {
        const sortedArray = [...this.state.employees]
        console.log(sortedArray);
        if (this.sort === "DESC") {
            sortedArray.sort((a,b) => a.name.first.localeCompare(b.name.first))
        } else {
            sortedArray.sort((a,b) => b.name.first.localeCompare(a.name.first))
        }
        this.setState({employees:sortedArray}, () => {this.displayEmployees()})
        }

    searchEmployee = async () => {
        await API.getEmployee()
        .then(employees => {
            this.setState({ employees:employees.data.results }, () => {this.displayEmployees()}) 
            console.log(employees.data.results);
            })
        .catch(err => console.log(err));
    };


    render() {
        return (
            <div>   
            <TableHtml
            headings={this.state.headings}
            click={this.handleClick}
            rows={this.state.rows}
            format={this.state.format}
            />
            </div>
        )   
    };
}

    export default TableData;