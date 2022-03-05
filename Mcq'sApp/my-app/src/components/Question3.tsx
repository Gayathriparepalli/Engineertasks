import React from "react";
import {RootState} from "../redux/reducer/Index";
import {useSelector} from "react-redux";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ButtonsPage from "./ButtonsPage";
import {useDispatch} from "react-redux";
import {question3} from "../redux/actions/AppActions"

const Question3=()=>{  
	const data:any=useSelector((state:RootState)=>state.rootState.questions)
    const dispatch=useDispatch();
  const selectedAnswer:any=useSelector((state:RootState)=>state.answers);
	 const changeHandler=(e:any)=>{			
    dispatch(question3(e.target.value.toUpperCase()));		
     
	}

	return(
        <>
         <ButtonsPage/>
		<Typography component="h1">3.{data.length?data[2].question:null}</Typography>
	 <TextField type="text" id="standard-basic" 
   label="write answer here" variant="standard" onChange={changeHandler} 
    value={selectedAnswer.question3?selectedAnswer.question3:""}  />  
      </>
		)
}
export default Question3