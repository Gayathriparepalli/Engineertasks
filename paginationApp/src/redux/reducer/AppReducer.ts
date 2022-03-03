import {ActionTypes} from "../contents/ActionTypes";
const initialState={
	hits:[],
	rowData:[]
}
type reducerType={
	payload:any,
	type:string
}
export const AppReducer=(state=initialState.hits,{type,payload}:reducerType)=>{
	switch(type){
		case ActionTypes.FETCH_DATA:
		return [...state, ...payload];           
        default:
		return state;
	}
}
export const AppReducer1=(state=initialState.rowData,{type,payload}:reducerType)=>{
	switch(type){
		case ActionTypes.ROW_DATA:
		return payload;           
        default:
		return state;
	}
}