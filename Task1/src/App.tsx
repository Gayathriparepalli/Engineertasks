import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import AstroidDetails from "./components/AstroidDetails";

function App() {
  return (  
    <div >
   
    <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/astroidDetails/:astroidId" element={<AstroidDetails />} />
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
