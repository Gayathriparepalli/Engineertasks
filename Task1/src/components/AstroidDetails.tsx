import React from "react";
import {useSelector} from "react-redux";
import {RootState}  from "../redux/reducer/Index";
import {  Paper } from "@material-ui/core";
const AstroidDetails=()=>{
	const details=useSelector((state:RootState) =>state.astroidDetails.astroidDetails); 
 
	return (
     <Paper elevation={20} style={{padding: "30px 20px", width: 400, margin: "20px auto" }}>AstroidDetails:
     {details&&         	
     	<ul data-testid="list">
       	<li>name: {details.name}</li>       
        <li>is_potentially_hazardous_asteroid: {details['is_potentially_hazardous_asteroid']?"true":"false"}</li>       
        <li>nasa_jpl_url: {details.nasa_jpl_url}</li>
      </ul>
      
  }
     </Paper>
		)
}
export default  AstroidDetails;