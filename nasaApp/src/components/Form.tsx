import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {RootState}  from "../redux/reducer/Index"
import {fetchData ,fetchDetails} from "../redux/actions/AstroidActions";
import {Paper, TextField, Button } from "@material-ui/core";
const Form=()=>{
  const randomId=useSelector((state:RootState) =>state.astroidDetails.randomId);  
  const dispatch=useDispatch();
  const [isDisable,setIsDisable]= useState<boolean>(true);  
  const navigate=useNavigate();
  const [astroidId,setAstroidId]=useState<string>("");
 
useEffect(()=>{
  dispatch(fetchData());  
},[])



 //submit handler
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
dispatch(fetchDetails(astroidId));
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
         const singleId=randomId.map((val:any)=>val.id)           
         setAstroidId(singleId[Math.floor(Math.random() * singleId.length)]);
         setIsDisable(false);
        
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
             data-testid="randomId-button"
          >
           Random Asteroid 
          </Button>
          </Paper>
         )
}


export default Form