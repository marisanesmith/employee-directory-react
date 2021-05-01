import React from "react";
import "./style.css";

function SearchBar(props){
    return (
    <form>
      <div className="form-group search-widget">
      <div className="input-group mb-3">
        <input 
        onChange={(e) => {
          console.log(e.target.value);
          props.setSearch(e.target.value)}}
        value={props.search}
        name="search"
        type="text" 
        className="form-control mb-3" 
        placeholder="Search for an Employee"
        id="search"
         />
        {/* <button onClick={props.handleFormSubmit} className="btn btn-info">Search</button> */}
    </div>
    </div>
  </form>
  );
}

//use filter method to narrow the search of employees down by name
// use sort method to sort the names, etc in ascending or descending order

export default SearchBar;
