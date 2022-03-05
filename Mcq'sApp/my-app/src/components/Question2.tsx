import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {RootState} from "../redux/reducer/Index";
import {useSelector} from "react-redux";
import Typography from '@mui/material/Typography';
import ButtonsPage from "./ButtonsPage";
import {useDispatch} from "react-redux";
import {question2} from "../redux/actions/AppActions"
const Question2=()=>{
 const dispatch=useDispatch();  
	const data:any=useSelector((state:RootState)=>state.rootState.questions);
  const selectedAnswer:any=useSelector((state:RootState)=>state.answers);  
	 const changeHandler=(e:any)=>{				
    dispatch(question2(e.target.value))	
   
	}
	return(
        <>
         <ButtonsPage/>
		<Typography component="h1">2.{data.length?data[1].question:null}</Typography>
		<RadioGroup
        aria-label="questions"        
        name="radio-buttons-group"
         value={selectedAnswer.question2?selectedAnswer.question2:""}     
        onChange={changeHandler}
      >
      {data.length && data[1]['answers'].map((val:any)=>
         <div key={val}>
        <FormControlLabel value={val} control={<Radio />} label={val} />
        </div>
        )}
      </RadioGroup>
      </>
		)
}
export default Question2