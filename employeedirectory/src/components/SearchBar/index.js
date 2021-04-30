import React from "react";
import "./style.css";

function SearchBar(props){
    return (
    <form>
      <div className="form-group search-widget">
      <div className="input-group mb-3">
        <input 
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text" 
        className="form-control" 
        placeholder="Search for an Employee"
        id="search"
         />
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button> */}
    </div>
    </div>
  </form>
  );
}

//use filter method to narrow the search of employees down by name
// use sort method to sort the names, etc in ascending or descending order

export default SearchBar;
