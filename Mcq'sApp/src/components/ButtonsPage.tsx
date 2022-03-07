import React from "react";
import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducer/Index";
const ButtonsPage=()=>{
  const selectedAnswer:any=useSelector((state:RootState)=>state.answers);
  const selectedAnswer5:any=useSelector((state:RootState)=>state.answer5);
	const navigate=useNavigate()
	return(
        <Stack spacing={2} direction="row" data-testid="stack">
        <Button
          variant="contained"
          style={{background:selectedAnswer.question1?"red":"gray"}} 
           onClick={()=>navigate("/question1")}            
        >
          1
        </Button>
        <Button
         onClick={()=>navigate("/question2")}
           variant="contained"
           style={{background:selectedAnswer.question2?"red":"gray"}}
               
        >
          2
        </Button>
        <Button
          variant="contained"
          style={{background:selectedAnswer.question3?"red":"gray"}}
          
          onClick={()=>navigate("/question3")}          
        >
         3
        </Button>
        <Button
         variant="contained"
         style={{background:selectedAnswer.question4?"red":"gray"}}
          onClick={()=>navigate("/question4")}         
        >
         4
        </Button>
         <Button
         onClick={()=>navigate("/question5")} 
          variant="contained"
          style={{background:selectedAnswer5.length?"red":"gray"}}     
        >
         5
        </Button>
      </Stack>
		)
} 
export default ButtonsPage;