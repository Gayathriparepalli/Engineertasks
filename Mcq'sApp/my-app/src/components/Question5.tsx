import React from "react";
import {RootState} from "../redux/reducer/Index";
import {useSelector} from "react-redux";
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ButtonsPage from "./ButtonsPage";
import Button from "@mui/material/Button"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {question5} from "../redux/actions/AppActions"
const Question5=()=>{
	const navigate=useNavigate();
	const data:any=useSelector((state:RootState)=>state.rootState.questions)
	const dispatch=useDispatch();		 
	const selectedAnswer:any=useSelector((state:RootState)=>state.answer5);
 const changeHandler=(e:any)=>{       	
      	dispatch(question5(e.target.name));  
      	}
	const handleSubmit=()=>{		
      navigate("/submitPage")
	}	
	return(
        <>
         <ButtonsPage/>
		<Typography component="h1">5.{data.length?data[4].question:null}</Typography>
	    <FormGroup>
	    {data.length && data[4]['answers'].map((val:any)=>
         <div key={val}>
       <FormControlLabel name={val} control={<Checkbox />} label={val} onChange={changeHandler}
        checked={selectedAnswer.length?(selectedAnswer.includes(val)):false}
       />
     </div>
     )}
    </FormGroup>
    <Button variant="contained" onClick={()=>handleSubmit()}>submit</Button>
      </>

		)
}
export default Question5
