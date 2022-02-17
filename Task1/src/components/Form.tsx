import React,{useState,useEffect} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {RootState}  from "../redux/reducer/Index"
import {astroidDetails,randomAstroidId, } from "../redux/actions/AstroidActions";
import {  Paper, TextField, Button } from "@material-ui/core";
const Form=()=>{
  const randomId=useSelector((state:RootState) =>state.randomId.randomId);  
  const dispatch=useDispatch();
  const [isDisable,setIsDisable]= useState<boolean>(true);  
  const navigate=useNavigate();
  const [astroidId,setAstroidId]=useState<string>("");
 
useEffect(()=>{
  axios
      .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((res) => { 
      console.log(res.data.near_earth_objects); 
        console.log(res.data.near_earth_objects.map((val:any)=>val.id));      
        dispatch(randomAstroidId(res.data.near_earth_objects.map((val:any)=>val.id)))
           })
      .catch((err) => console.log(err));
},[])



 //submit handler
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
console.log(astroidId)
 axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/${astroidId}?api_key=4Mme25fHH3RFW4R3h3fEIiNwdJNFX76pNWTdoQfE`)
      .then((res) => { 
      console.log(res.data); 
      dispatch(astroidDetails(res.data))      
       })
      .catch((err) => console.log(err));  
        navigate(`/astroidDetails/${astroidId}`)      
      setAstroidId("");
     
}

//onchange handler
const handleChange=(e:any)=>{ 
setAstroidId(e.target.value);
setIsDisable(false);

}


//randomId generator
const handleClick=()=>{  
  console.log("data")
     axios
      .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((res) => { 
      console.log(res.data.near_earth_objects); 
        console.log(res.data.near_earth_objects.map((val:any)=>val.id));      
        dispatch(randomAstroidId(res.data.near_earth_objects.map((val:any)=>val.id)))
         if(randomId.length){
         setAstroidId(randomId[Math.floor(Math.random() * randomId.length)]);
         setIsDisable(false);
        }
     })
      .catch((err) => console.log(err));
}
     
  
  return ( 
     <Paper elevation={20} style={{padding: "30px 20px", width: 300, margin: "20px auto" }}>
      <form onSubmit={handleSubmit}>
          <TextField
            
            type="text"
            label="Enter Astroid ID"
            name="astroidId"         
            value={astroidId} 
            onChange={handleChange}
            data-testid="app-input"
           
          />
          <Button
            type="submit"
            variant="contained" 
            color="primary"
            style={{marginTop:10}} 
           disabled={isDisable}
           data-testid="submit-button"
          >
            submit
          </Button>
          </form>
          <Button
             variant="contained" 
            color="primary"
            style={{marginTop:10}} 
             onClick={handleClick}
          >
           Random Asteroid 
          </Button>
          </Paper>
         )
}


export default Form