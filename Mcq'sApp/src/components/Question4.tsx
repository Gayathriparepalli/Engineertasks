import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {RootState} from "../redux/reducer/Index";
import {useSelector} from "react-redux";
import Typography from '@mui/material/Typography';
import ButtonsPage from "./ButtonsPage";
import Grid from '@mui/material/Grid';
import {useDispatch} from "react-redux";
import {question4} from "../redux/actions/AppActions"
const Question4=()=>{
	
	const data:any=useSelector((state:RootState)=>state.rootState.questions);
	 const dispatch=useDispatch();
  const selectedAnswer:any=useSelector((state:RootState)=>state.answers);
	const changeHandler=(e:any)=>{
	dispatch(question4(e.target.value))			
		
	}
	return(
        <>
         <ButtonsPage/>
		<Typography component="h1">4.{data.length?data[3].question:null}</Typography>
		<Grid container>
		<Grid item xs={4}>
		{data[3]['GroupA'].map((val:any)=>
			<ul key={val.id}>
			<li>{val.id}. {val.value}</li>			
			</ul>)}
		</Grid>
		<Grid item xs={4}>
		{data[3]['GroupB'].map((val:any)=>
			<ul key={val.id}>
			<li>{val.id}. {val.value}</li>			
			</ul>)}
		</Grid>
		</Grid>
		<RadioGroup
        aria-label="questions"        
        name="radio-buttons-group"
        value={selectedAnswer.question4?selectedAnswer.question4:""}      
        onChange={changeHandler}
      >
       {data.length && data[3]['answers'].map((val:any)=>
        <div key={val}>
        <FormControlLabel value={val} control={<Radio />} label={val} />
        </div>
        )}
      </RadioGroup>
      </>
		)
}
export default Question4