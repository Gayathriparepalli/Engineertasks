import {ActionTypes} from "../contents/ActionTypes";
import axios from 'axios';

export const onSelectLanguage=(language:string)=>async(dispatch:any)=>{
	const response=await axios.get(`http://localhost:3006/${language}`);
	dispatch({type:ActionTypes.ONSELECT_LANGUAGE,payload:response.data});
	
}
export const question1=(answer:string)=>{
	return {
		type:ActionTypes.QUESTION1,
		payload:answer
	}
}
export const question2=(answer:string)=>{
	return {
		type:ActionTypes.QUESTION2,
		payload:answer
	}
}
export const question3=(answer:string)=>{
	return {
		type:ActionTypes.QUESTION3,
		payload:answer
	}
}
export const question4=(answer:string)=>{
	return {
		type:ActionTypes.QUESTION4,
		payload:answer
	}
}
export const question5=(answer:[])=>{
	return {
		type:ActionTypes.QUESTION5,
		payload:answer
	}
}