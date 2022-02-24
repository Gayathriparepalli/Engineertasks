import React,{useEffect,useState} from "react";
import {Paper,TextField,Button} from "@material-ui/core";
import {useSelector,useDispatch} from "react-redux";
import {fetchCountryDetails} from "../redux/actions/AppActions";
import {useNavigate} from "react-router-dom";
const Form =()=>{
	const [country,setCountry]=useState<string>("");
	const [isDisabled,setIsdisabled]=useState<boolean>(true);
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const handleChange=(e:any)=>{
    setCountry(e.target.value);
    setIsdisabled(false);
	}
	const handleSubmit=(e:any)=>{
		e.preventDefault();
        dispatch(fetchCountryDetails(country));
        navigate("/countryDetails")
	}
	return(
     <Paper style={{padding:"20px 30px", margin:"30px auto",width:300  }} >
     <form onSubmit={handleSubmit}>
     <TextField data-testid="inputFiled" label="Enter Country" variant="standard" value={country} onChange={handleChange}/>
     <Button data-testid="submit" type="submit" variant="contained" color="primary" disabled={isDisabled}>submit</Button>
     </form>
     </Paper>
		)
}
export default Form;