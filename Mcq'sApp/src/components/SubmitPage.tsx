import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducer/Index";
import Paper from "@mui/material/Paper";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Grid from "@mui/material/Grid"
ChartJS.register(ArcElement, Tooltip, Legend);

const SubmitPage=()=>{	
	const data:any=useSelector((state:RootState)=>state.rootState.questions)
	const selectedAnswer:any=useSelector((state:RootState)=>state.answers);
    const selectedAnswer5:any=useSelector((state:RootState)=>state.answer5);
	const [status,setStatus]=useState("loading")
	const [myAnswers,setmyAnswers]=useState<number>(0);
	useEffect(()=>{
	if(selectedAnswer.question1===data[0].correct_answers){
		setmyAnswers((myAnswers)=>myAnswers+1);		
	}
	if(selectedAnswer.question2===data[1].correct_answers){
		setmyAnswers((myAnswers)=>myAnswers+1)		
	}
	if(selectedAnswer.question3===data[2].correct_answers){
		setmyAnswers((myAnswers)=>myAnswers+1)		
	}
	if(selectedAnswer.question4===data[3].correct_answers){
		setmyAnswers((myAnswers)=>myAnswers+1)		
	}	
	if(selectedAnswer5==data[4].correct_answers){
		setmyAnswers((myAnswers)=>myAnswers+1)		
	}

		setStatus("loaded");

},[])
	
	 const data1:any = {
  labels: ['correctAnswers', 'wrongAnswers'],
  datasets: [
    {
      label: 'result',
      data: [(myAnswers/5)*100, ((5-myAnswers)/5)*100],
      backgroundColor: [
        "green","red"      
       ],
      
      borderWidth: 1,
    },
  ],
};
	
	
      return <Paper style={{width:500 ,padding:"20px 30px",margin:"20px auto"}}>correctAnswers:{status==="loaded"?myAnswers:"loading"}
                   WrongAnswers:{5-myAnswers}
            
            <Grid container>
		<Grid item xs={6}>
		selected Answers:
		<ul>
		<li>Question 1:{selectedAnswer.question1}</li>
		<li>Question 2:{selectedAnswer.question2}</li>
		<li>Question 3:{selectedAnswer.question3}</li>
		<li>Question 4:{selectedAnswer.question4}</li>
		<li>Question 5:{selectedAnswer5?selectedAnswer5.map((val:string)=>val+","):null}</li>
		</ul>
		</Grid>
		<Grid item xs={6}>
		 correct Answers:
          {data.map((val:any)=>
          	<ul key={val.id}>
          	<li> Question {val.id}:{val.correct_answers}</li>
          	</ul>
         ) }
		</Grid>
		</Grid>

                   
                 <Pie data={data1} />       
            
                      
                   </Paper>
}
export default SubmitPage;


// for(let i=1;i<=4;i++){	
// 	 //console.log(selectedAnswer)
// 	 		 const question:any="question"+i	
// 	 		// console.log(question,selectedAnswer.question1)
// 	 		// console.log(question==="question1")
// 	 		const data1=question
// 		if(selectedAnswer.data1===data[i-1].correct_answers){
//           console.log("true");
//           setmyAnswers((myAnswers)=>myAnswers+1)
// 		}