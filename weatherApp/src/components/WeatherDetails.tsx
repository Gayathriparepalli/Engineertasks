import React from "react";
import {Card,Typography,CardContent ,CardMedia} from "@material-ui/core";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducer/Index";


const WeatherDetails=()=>{
	const details=useSelector((state:RootState)=>state.rootState.weatherDetails);  


	return (
    <div>       
		<Card style={{ maxWidth: 300,margin:30 }} data-testid="card">     
        <CardMedia
          component="img"
          height="20%"
          image={Array.isArray(details.weather_icons)?details.weather_icons[0]:null}
          alt="weather_icons"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           temprature:{details.temperature}
          </Typography>
          <Typography variant="body2">
            wind-speed:{details.wind_speed}
          </Typography>
           <Typography variant="body2">
          precip:{details.precip}
           </Typography>
        </CardContent>        
   </Card>   
      </div>   
)
}
export default WeatherDetails;
