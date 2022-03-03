import React,{useState} from 'react';
import TableData from "./components/TableData"
import RowData from "./components/RowData"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
   const [rowData,setRowData]=useState<string>("")
  return (

    <div >
   <Router>
   <Routes>
   <Route path="/" element={<TableData />}/>
   <Route path="/rowData" element={<RowData/>}/>
   </Routes>
      </Router>

    </div>
  );
}

export default App;
