
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
          props.setSearch(e.target.value.toLowerCase())}}
        name="search"
        type="text" 
        className="form-control mb-3" 
        placeholder="Search for an Employee"
        />
    </div>
    </div>
  </form>
  );
}

export default SearchBar;
