import React, { useState } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import TableData from "./components/TableData";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Jumbotron />
      <SearchBar setSearch={setSearch}/>
      <TableData search={search}/>
    </div>
  );

}

export default App;

// import React, { useState } from "react";
// import Jumbotron from "./components/Jumbotron";
// import SearchBar from "./components/SearchBar";
// import TableData from "./components/TableData";

// import './App.css';

// function App() {
//   const [search, setSearch] = useState();
//   return (
//     <div className="App">
//       <Jumbotron />
//       <SearchBar setSearch={setSearch} />
//       <TableData search={search} />
//     </div>
//   );
// }

// export default App;
