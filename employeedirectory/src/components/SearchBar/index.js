import React from "react";
import "./style.css";

function Search() {
    return (
    <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  );
}

export default Search;
