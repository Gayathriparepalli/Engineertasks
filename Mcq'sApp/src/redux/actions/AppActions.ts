import {ActionTypes} from "../contents/ActionTypes";
import axios from 'axios';
 import data from "../../db.json";


export const onSelectLanguage=(language:string)=>{
if(language==="English"){
	return{
		type:ActionTypes.ONSELECT_LANGUAGE,
		payload:data.english
	}}else{
		return{
		type:ActionTypes.ONSELECT_LANGUAGE,
		payload:data.telugu
	}}

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