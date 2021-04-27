import React from "react";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import TableData from "./components/TableData";

import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SearchBar />
      <TableData />
    </div>
  );
}

export default App;
