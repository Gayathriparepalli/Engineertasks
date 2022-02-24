import {ActionTypes} from "../contents/ActionTypes";
import axios from "axios";

export const fetchCountryDetails=(country:string)=>async(dispatch:any)=>{
	const response=await axios.get(`https://restcountries.com/v2/name/${country}`);
	dispatch({type:ActionTypes.COUNTRY_DETAILS,payload:response.data})
}


export const fetchWeatherDetails=(capital:string)=>async(dispatch:any)=>{
	const response=await axios.get(`http://api.weatherstack.com/current?
		access_key=589f85c0441228ec5bcb091f71edd50f&query=${capital}`);
          dispatch({type:ActionTypes.WEATHER_DETAILS,payload:response.data.current});
          

}