import { ActionTypes } from "../contents/ActionTypes";
import axios from "axios";
const baseURL="https://api.nasa.gov/neo/rest/v1/neo";
export const fetchData=()=>async (dispatch:(any))=>{
	const response=await axios.get(`${baseURL}/browse?api_key=4Mme25fHH3RFW4R3h3fEIiNwdJNFX76pNWTdoQfE`);
	dispatch({type:ActionTypes.FETCH_DATA,payload:response.data.near_earth_objects})
}

export const fetchDetails=(astroidId:string)=>async (dispatch:(any))=>{
	const response=await axios.get(`${baseURL}/${astroidId}?api_key=4Mme25fHH3RFW4R3h3fEIiNwdJNFX76pNWTdoQfE`);
	dispatch({type:ActionTypes.Astroid_Details,payload:response.data})
}

