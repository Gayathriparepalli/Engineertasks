import {ActionTypes} from "../contents/ActionTypes";
const initialState={
	questions:[],
    answers:[],  
    answer5:[]
    }
type reducerType={
	type:string,
	payload:any
}
export const AppReducer=(state=initialState,{type,payload}:reducerType)=>{
	switch(type){
		case ActionTypes.ONSELECT_LANGUAGE:
		return {...state,questions:payload}		
		default:
		return state
	}
}
export const AppReducer1=(state=initialState.answers,{type,payload}:reducerType)=>{
	switch(type){
		case ActionTypes.QUESTION1:
		return {...state,question1:payload}	
		case ActionTypes.QUESTION2:
		return {...state,question2:payload}	
		case ActionTypes.QUESTION3:
		return {...state,question3:payload}	
		case ActionTypes.QUESTION4:
		return {...state,question4:payload}			     
		default:
		return state
	}
}
export const Answer5Reducer=(state=initialState.answer5,{type,payload}:reducerType)=>{
	switch(type){
	case ActionTypes.QUESTION5:
       const exist = state.find((val) => val===payload);
       if(exist){
		return state.filter((val)=>val!==payload)
	}else{
		return [...state,payload]
	}
		default:
		return state
}
}