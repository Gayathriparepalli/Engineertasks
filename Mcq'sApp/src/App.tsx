import React from 'react';
import Form from "./components/Form";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Question2 from "./components/Question2"
import Question1 from "./components/Question1"
import Question3 from "./components/Question3"
import Question4 from "./components/Question4"
import Question5 from "./components/Question5"
import SubmitPage from "./components/SubmitPage"
function App() {
  return (
    <div >

     <Router>
     <Routes>
     <Route path="/" element={<Form/>}/>    
      <Route path="/question1" element={<Question1/>}/>
     <Route path="/question2" element={<Question2/>}/>
      <Route path="/question3" element={<Question3/>}/>
      <Route path="/question4" element={<Question4/>}/>
       <Route path="/question5" element={<Question5/>}/>
        <Route path="/submitPage" element={<SubmitPage/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
