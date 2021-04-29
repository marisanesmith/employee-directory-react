import React from "react";
import "./style.css";

function Search(props) {
    return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        <input 
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text" 
        className="form-control" 
        placeholder="Search for an Employee"
        id="Search"
        aria-label="Sizing example input" 
        aria-describedby="inputGroup-sizing-default"/>
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
    </div>
  </form>
  );
}

//use filter method to narrow the search of employees down by name
// use sort method to sort the names, etc in ascending or descending order

export default Search;
