// where all the data for the table is handled (api call)
// lifecycle method

// create another file in the utils folder where you will include the api.js for the URL of the api

import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import SearchBar from '../SearchBar';

class TableData extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        result: {},
        search: ""
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
        return this.props.data.map(employee => {
            <TableHtml
                image={employee.image}
                name={employee.name}
                email={employee.email}
                phone={employee.phone}
                nationality={employee.nationality}
            />
        })
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