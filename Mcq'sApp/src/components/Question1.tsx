import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {RootState} from "../redux/reducer/Index";
import {useSelector} from "react-redux";
import Typography from '@mui/material/Typography';
import ButtonsPage from "./ButtonsPage";
import {useDispatch} from "react-redux";
import {question1} from "../redux/actions/AppActions"
const Question1=()=>{  
  const dispatch=useDispatch();
	const data:any=useSelector((state:RootState)=>state.rootState.questions);
  const selectedAnswer:any=useSelector((state:RootState)=>state.answers); 
	 const changeHandler=(e:any)=>{	
   dispatch(question1(e.target.value))
		
	}
	return(
        <>
         <ButtonsPage/>
		<Typography component="h1">1.{data.length?data[0].question:null}</Typography>
		<RadioGroup
        aria-label="questions"        
        name="radio-buttons-group"
       value={selectedAnswer.question1?selectedAnswer.question1:""} 
        onChange={changeHandler}
      >
       {data.length && data[0]['answers'].map((val:any)=>
        <div key={val}>
        <FormControlLabel value={val} control={<Radio />} label={val} />
        </div>
        )}
      </RadioGroup>
      </>
		)
}
export default Question1